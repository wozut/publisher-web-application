import Markdown from "react-markdown";
import { ReactElement } from "react";
import rehypeRaw from "rehype-raw";
import { markUpLanguageToComponentMap } from "./markup-language-to-component-map";

export function RenderMarkdownText({
  markdownText,
}: {
  markdownText: string;
}): ReactElement {
  return (
    <Markdown
      //TODO remarkGfm
      remarkPlugins={[]}
      rehypePlugins={[rehypeRaw]}
      components={markUpLanguageToComponentMap}
    >
      {markdownText}
    </Markdown>
  );
}
