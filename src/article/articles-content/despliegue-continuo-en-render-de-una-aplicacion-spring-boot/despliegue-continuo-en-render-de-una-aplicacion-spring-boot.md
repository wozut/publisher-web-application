# Despliegue continuo en Render de una aplicación Spring Boot

En este artículo voy a explicar cómo configurar el despliegue continuo en Render basado en imágenes [Docker](https://www.docker.com/ "Docker") de una aplicación [Spring Boot](https://spring.io/projects/spring-boot).

Herramientas y tecnologías usadas en este ejemplo:

- [GitHub](https://github.com/) para el [control de versiones](https://en.wikipedia.org/wiki/Version_control).
- [GitHub Actions](https://docs.github.com/en/actions) para gestionar el [despliegue continuo](https://en.wikipedia.org/wiki/Continuous_deployment).
- [GitHub Packages](https://github.com/features/packages) para la publicación y descarga de imágenes [Docker](https://www.docker.com/).
- [Gradle](https://gradle.org/), [Kotlin/JVM](https://kotlinlang.org/docs/jvm-get-started.html) y [Spring Boot](https://spring.io/projects/spring-boot) como tecnologías principales de la aplicación. Pero **lo que se explica en esta guía se puede aplicar a cualquier aplicación que se pueda _containerizar_**.
- [Render](https://render.com/) como [PaaS](https://en.wikipedia.org/wiki/Platform_as_a_service) donde desplegar y ejecutar nuestro [servicio web](https://en.wikipedia.org/wiki/Web_service).

Puedes encontrar el código de esta guía en [mi repositorio de GitHub](https://github.com/dgraciac/guide-cd-render-docker-based-spring-boot).

## Crear un repositorio GitHub donde subir el código

Empecemos por lo básico. Creamos un repositorio de GitHub donde subir el código de la aplicación.

Generamos una aplicación Spring Boot en [spring initializr](https://start.spring.io/) con la siguiente [configuración](https://start.spring.io/#!type=gradle-project-kotlin&language=kotlin&platformVersion=3.1.3&packaging=jar&jvmVersion=17&groupId=dgraciac.guides&artifactId=guide-cd-render-docker-based-spring-boot&name=guide-cd-render-docker-based-spring-boot&description=guide-cd-render-docker-based-spring-boot&packageName=dgraciac.guides.guidecdrenderdockerbasedspringboot&dependencies=web,actuator). Lo descargamos y lo subimos al repositorio de GitHub.

## _Containerización_

Tenemos que _containerizar_ nuestra aplicación para que Render pueda ejecutarla como un contenedor de Docker. Para conseguirlo, necesitamos añadir un fichero Dockerfile apropiado para nuestra aplicación Spring Boot en el directorio raíz del repositorio. El siguiente fichero Dockerfile servirá para alcanzar nuestro objetivo (si estás interesado/a en los detalles de este Dockerfile, puedes consultar la [guía oficial de Spring Boot Docker](https://spring.io/guides/topicals/spring-boot-docker/) que he seguido).

```dockerfile
FROM eclipse-temurin:17.0.6_10-jre-jammy

VOLUME /tmp
ARG JAR_FILE
COPY ${JAR_FILE} spring-boot.jar
ENTRYPOINT ["sh", "-c", "java ${JAVA_OPTS} -jar /spring-boot.jar ${0} ${@}"]
EXPOSE 8080
```

## Publicación de una nueva imagen de Docker cuando ocurra un _push_ a la rama principal

Ahora que ya tenemos nuestro Dockerfile listo, vamos a publicar una imagen de Docker cada vez que ocurra un _push_ a la rama principal de nuestro repositorio. De eso se va a encargar un _workflow_ de GitHub Actions que situaremos en la ruta «.github/workflows/on-push-to-main.yaml».

```yaml
name: On push to main

on:
  push:
    branches:
      - main

jobs:
  deploy_to_production:
    runs-on: ubuntu-latest

    env:
      REGISTRY: ghcr.io
      IMAGE_LATEST_URL: ghcr.io/dgraciac/guide-cd-render-docker-based-spring-boot:latest
      IMAGE_COMMIT_SHA_URL: ghcr.io/dgraciac/guide-cd-render-docker-based-spring-boot:${{ github.sha }}

    permissions:
      contents: read
      packages: write

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Set up JDK
        uses: actions/setup-java@v3
        with:
          distribution: "temurin"
          java-version: 17

      - name: Gradle build
        run: ./gradlew build -x check

      - name: Build Docker images
        run: |
          docker build \
          --build-arg JAR_FILE=build/libs/guide-cd-render-docker-based-spring-boot-0.0.1-SNAPSHOT.jar \
          -t ${{ env.IMAGE_LATEST_URL }} \
          -t ${{ env.IMAGE_COMMIT_SHA_URL }} \
          --platform=linux/amd64 \
          .

      - name: Log in to the Container registry
        uses: docker/login-action@65b78e6e13532edd9afa3aa52ac7964289d1a9c1
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Push image with "commit sha" version
        run: docker push ${{ env.IMAGE_COMMIT_SHA_URL }}

      - name: Push image with "latest" version
        run: docker push ${{ env.IMAGE_LATEST_URL }}
```

Subimos este cambio a la rama principal y esto iniciará un [_workflow run_](https://github.com/dgraciac/guide-cd-render-docker-based-spring-boot/actions) que publicará una nueva imágen de Docker de la aplicación Spring Boot en el [_container registry de nuestra cuenta de GitHub_](https://github.com/dgraciac?tab=packages) con dos etiquetas: «latest» y otra con el _commit_ SHA.

## Conectar Render a nuestras imágenes de Docker

Ahora que ya tenemos una URL para nuestras imágenes de Docker, vamos a configurar un servicio web en Render y vamos a conectarlo a «ghcr.io/dgraciac/guide-cd-render-docker-based-spring-boot:latest».

Seleccionamos «Deploy an existing image from a registry».

<figure>
    <img src="/article/despliegue-continuo-en-render-de-una-aplicacion-spring-boot/images/render-1.webp" alt="Render">
    <figcaption>Fig.1 - Desplegando una imágen Docker de un <i>container registry</i></figcaption>
</figure>

En el campo «Image URL» ponemos la URL con la etiqueta «latest»: ghcr.io/dgraciac/guide-cd-render-docker-based-spring-boot:latest.

Si tu repositorio es privado, tu _container registry_ también lo es y tendrás que añadir unas credenciales en tu cuenta de Render para que pueda descargarse las imágenes del _container registry_.

<figure>
    <img src="/article/despliegue-continuo-en-render-de-una-aplicacion-spring-boot/images/render-2.webp" alt="Render">
    <figcaption>Fig.2 - Configurando la URL de la imágen Docker</figcaption>
</figure>

Elegimos nombre del servicio web, región geográfica e «Instance Type».

En la sección «Advanced»,

- añadimos una variable de entorno «PORT» (reservada por Render) con el valor «8080» para decirle a Render que redirija las peticiones que llegan al servicio web al puerto 8080 del contenedor Docker donde se está ejecutando la aplicación Spring Boot (Spring Boot escucha el puerto 8080 por defecto).
- en el campo «Health Check Path» añadimos «/actuator/health»

Por último, creamos el servicio web.

<figure>
    <img src="/article/despliegue-continuo-en-render-de-una-aplicacion-spring-boot/images/render-3.webp" alt="Render">
    <figcaption>Fig.3 - Configuración avanzada de un servicio web en Render</figcaption>
</figure>

Al cabo de unos minutos, el servicio web estará disponible en «https://guide-cd-render-docker-based-spring-boot.onrender.com». Para comprobar que la aplicación Spring Boot es accesible públicamente, pega esta URL en tu navegador: [https://guide-cd-render-docker-based-spring-boot.onrender.com/actuator/health](https://guide-cd-render-docker-based-spring-boot.onrender.com/actuator/health). Si todo ha ido bien, deberías ver el siguiente mensaje: `{"status":"UP","groups":["liveness","readiness"]}`

Ahora ya podemos deplegar manualmente la versión «latest» de nuestra aplicación Spring Boot desde el _dashboard_ de Render.

<figure>
    <img src="/article/despliegue-continuo-en-render-de-una-aplicacion-spring-boot/images/render-4.webp" alt="Render">
    <figcaption>Fig.4 - Panel de control de un servicio web en Render</figcaption>
</figure>

Pero lo que realmente nos va a facilitar la vida es que nuestro servicio web se despliegue automáticamente cada vez que se publique una nueva imágen Docker de la aplicación. Es decir, despliegue continuo.

## Despliegue continuo

Para configurar el despliegue continuo vamos a usar el [_webhook_](https://render.com/docs/deploy-an-image#deploy-via-webhook) que nos ofrece Render para iniciar un nuevo despliegue.

Tenemos que añadir un paso más al final de nuestro _workflow_ de GitHub para que llame al _webhook_ con la URL de la imagen Docker que tiene la etiqueta _commit_ SHA (tiene que ser URL _encoded_).

```yaml
- name: Trigger deploy in Render
  run: |
    status_code="$(curl --silent --output /dev/null --get -w "%{http_code}" --data-urlencode "imgURL=${{ env.IMAGE_COMMIT_SHA_URL }}" ${{ secrets.RENDER_DEPLOY_WEBHOOK }})"
    echo $status_code
    expected_status_code="200"
    if [ $status_code != $expected_status_code ]; then
    exit 1
    fi
```

Las opciones que se pasan al comando curl sirven para codificar la URL que añadimos al _query string_ y poder obtener el código de respuesta para hacer fallar el _workflow_ en caso de que Render nos conteste con un error.

Solo falta mantener la URL del _webhook_ en secreto para evitar riesgos. Así que creamos un secreto «RENDER_DEPLOY_WEBHOOK» en nuestro repositorio de GitHub (ver [documentación oficial](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)).

En mi caso, también añado esto al _job_ del _workflow_ porque he configurado el secreto como un secreto del entorno de producción.

```yaml
environment:
  name: production
  url: https://guide-cd-render-docker-based-spring-boot.onrender.com
```
