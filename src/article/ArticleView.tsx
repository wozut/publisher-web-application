import {Article} from "@/src/article/Article";
import {authors} from "@/src/author/authors";
import {safeReadFileAsString} from "@/libraries/safeReadFile";
import {articlesDirectory} from "@/src/article/articlesDirectory";
import {AnyCustomError} from "@/src/CustomError";
import {ResultAsync} from "neverthrow";
import {RenderMarkdownText} from "./render-markdown-text/render-markdown-text";

export default async function ArticleView({article}: {article: Article}) {
    const authorId = article.author
    const author = authors.find((author) => author.id === authorId);
    if (author === undefined) {
        throw new Error("TODO")
    }
    const fullArticlePath = `${articlesDirectory}${article.pathToContent}`;
    const encoding = "utf-8";
    const result: ResultAsync<string, AnyCustomError> = safeReadFileAsString(fullArticlePath, {encoding: encoding})

    return result.match((content: string) => {
        return (
            <div className="w-full flex flex-col place-items-center items-center gap-5">
                <h1 className="w-full lg:font-bold font-semibold lg:text-[64px] text-[30px] leading-tight text-charcoal-blue">
                    {article.title}
                </h1>
                <div className="w-full h-full flex gap-2 items-center">
                    <div className="flex flex-col gap-1">
                        <p className="lg:font-semibold font-bold lg:text-xl text-sm text-charcoal-blue">
                            {author.firstName} {author.lastName}
                        </p>
                    </div>
                </div>
                <div className="w-full flex flex-col-reverse xl:flex-row gap-8">
                    <div className="w-full min-w-[0%] blog-article">
                        <RenderMarkdownText markdownText={content}/>
                    </div>
                </div>
            </div>
        )
    }, () => {
        throw new Error("TODO")
    })
}
