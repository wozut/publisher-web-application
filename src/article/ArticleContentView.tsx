import { RenderMarkdownText } from "@/src/article/render-markdown-text/render-markdown-text";
import { ReactElement } from "react";

export function ArticleContentView({
  content,
}: {
  content: string;
}): ReactElement {
  return (
    <article className="w-full">
      <RenderMarkdownText markdownText={content} />
    </article>
  );
}
