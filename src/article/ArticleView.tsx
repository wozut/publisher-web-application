import { Article } from "@/src/article/Article";
import { authors } from "@/src/author/authors";
import { safeReadFileAsString } from "@/libraries/file-system/safeReadFileAsString";
import { articlesDirectory } from "@/src/article/articlesDirectory";
import { AnyCustomError } from "@/src/CustomError";
import { ResultAsync } from "neverthrow";
import { RenderMarkdownText } from "./render-markdown-text/render-markdown-text";

export default async function ArticleView({ article }: { article: Article }) {
  const authorId = article.author;
  const author = authors.find((author) => author.id === authorId);
  if (author === undefined) {
    throw new Error("TODO");
  }
  const fullArticlePath = `${articlesDirectory}${article.pathToContent}`;
  const encoding = "utf-8";
  const result: ResultAsync<string, AnyCustomError> = safeReadFileAsString(
    fullArticlePath,
    { encoding: encoding },
  );

  return result.match(
    (content: string) => {
      return (
        <article className="w-full">
          <RenderMarkdownText markdownText={content} />
        </article>
      );
    },
    () => {
      throw new Error("TODO");
    },
  );
}
