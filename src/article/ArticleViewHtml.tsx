import { Article } from "@/src/article/Article";
import { authors } from "@/src/author/authors";
import { safeReadFileAsString } from "@/libraries/file-system/safeReadFileAsString";
import { articlesDirectory } from "@/src/article/articlesDirectory";
import { AnyCustomError } from "@/src/CustomError";
import { ResultAsync } from "neverthrow";
import { ReactElement } from "react";
import { ArticleContentViewHtml } from "@/src/article/ArticleContentViewHtml";

export default async function ArticleViewHtml({
  article,
}: {
  article: Article;
}): Promise<ReactElement> {
  const authorId = article.author;
  const author = authors.find((author) => author.id === authorId);
  if (author === undefined) {
    throw new Error("TODO");
  }
  const fullArticlePath = `${articlesDirectory}${article.pathToHtmlContent}`;
  const encoding = "utf-8";
  const result: ResultAsync<string, AnyCustomError> = safeReadFileAsString(
    fullArticlePath,
    { encoding: encoding },
  );

  return result.match(
    (content: string) => {
      return <ArticleContentViewHtml content={content} />;
    },
    () => {
      throw new Error("TODO");
    },
  );
}
