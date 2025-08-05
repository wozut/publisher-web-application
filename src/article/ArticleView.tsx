import { Article } from "@/src/article/Article";
import { authors } from "@/src/author/authors";
import { safeReadFileAsString } from "@/libraries/file-system/safeReadFileAsString";
import { articlesDirectory } from "@/src/article/articlesDirectory";
import { AnyCustomError } from "@/src/CustomError";
import { ResultAsync } from "neverthrow";
import { ArticleContentView } from "@/src/article/ArticleContentView";
import { ReactElement } from "react";

export default async function ArticleView({
  article,
}: {
  article: Article;
}): Promise<ReactElement> {
  const authorId = article.author;
  const author = authors.find((author) => author.id === authorId);
  if (author === undefined) {
    throw new Error("TODO");
  }
  const fullArticlePath = `${articlesDirectory}${article.pathToMarkdownContent}`;
  const encoding = "utf-8";
  const result: ResultAsync<string, AnyCustomError> = safeReadFileAsString(
    fullArticlePath,
    { encoding: encoding },
  );

  return result.match(
    (content: string) => {
      return <ArticleContentView content={content} />;
    },
    () => {
      throw new Error("TODO");
    },
  );
}
