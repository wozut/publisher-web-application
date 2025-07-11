import { articles } from "@/src/article/articles";
import ArticleView from "@/src/article/ArticleView";
import { Article } from "@/src/article/Article";
import { isNullish } from "@/libraries/value-definition/isNullish";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const foundArticle: Article | undefined = articles.find(
    (article) => article.slug === slug,
  );
  if (isNullish(foundArticle)) throw new Error("TODO");

  return <ArticleView article={foundArticle} />;
}
