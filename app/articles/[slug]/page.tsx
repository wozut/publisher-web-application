import { articles } from "@/src/article/articles";
import ArticleView from "@/src/article/ArticleView";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const foundArticle = articles.find((article) => article.slug === slug);
  if (foundArticle === undefined) throw new Error("TODO");

  return <ArticleView article={foundArticle} />;
}
