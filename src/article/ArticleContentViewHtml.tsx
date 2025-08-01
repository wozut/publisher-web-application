import { ReactElement } from "react";
import { RenderHtmlText } from "@/src/article/render-markdown-text/render-html-text";

export function ArticleContentViewHtml({
  content,
}: {
  content: string;
}): ReactElement {
  return (
    <article className="w-full">
      <RenderHtmlText htmlText={content} />
    </article>
  );
}
