import {Article} from "@/src/article/Article";


export default async function ArticleView(article: Article) {
  const authorId = authorRepository
  return (
    <div className="w-full flex flex-col place-items-center items-center gap-5">
      <h1 className="w-full lg:font-bold font-semibold lg:text-[64px] text-[30px] leading-tight text-charcoal-blue">
        {article.title}
      </h1>
      <div className="w-full h-full flex gap-2 items-center">
        <div className="flex flex-col gap-1">
          <p className="lg:font-semibold font-bold lg:text-xl text-sm text-charcoal-blue">
            {author[0].name}
          </p>
          <div className="flex gap-2 items-center font-medium lg:text-sm text-[11px] text-gray-500">
            <p>
              {article.readTime} {t("readTime")}
            </p>
            <p>.</p>
            <p>{author[0].niche}</p>
          </div>
        </div>
      </div>
      <div className={"w-full"}>
        <FeaturedArticleThumbnail
          isFeatured={article.isFeatured}
          coverImage={article.coverImage}
        />
      </div>
      <div className="w-full flex flex-col-reverse xl:flex-row gap-8">
        <div className="w-full min-w-[0%] blog-article">
          <RenderMarkdownText markdownText={markdownContent} />
        </div>
        <div className="xl:min-w-[29.7%] xl:w-[29.7%] xl:max-w-[29.7%]">
          <BlogTableOfContent />
        </div>
      </div>
    </div>
  )
}
