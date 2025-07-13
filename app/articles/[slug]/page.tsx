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

  return (
    <div className={"w-full @container"}>
      <div
        className={
          "mx-auto max-w-[100cqw] @min-2xs:max-w-[98cqw] @min-xs:max-w-[94cqw] @min-2xl:max-w-[90cqw] @min-6xl:max-w-5xl"
        }
      >
        <ArticleView article={foundArticle} />
      </div>
    </div>
  );
}
