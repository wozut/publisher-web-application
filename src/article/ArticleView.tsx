import {Article} from "@/src/article/Article";
import {authors} from "@/src/author/authors";


export default async function ArticleView(article: Article) {
  const authorId = article.author
  const author = authors.find((author) => author.id === authorId);
  if(author === undefined) { throw new Error("Author not found") }

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
          <RenderMarkdownText markdownText={markdownContent} />
        </div>
        <div className="xl:min-w-[29.7%] xl:w-[29.7%] xl:max-w-[29.7%]">
          <BlogTableOfContent />
        </div>
      </div>
    </div>
  )
}
