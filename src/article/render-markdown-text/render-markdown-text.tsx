import Markdown from "react-markdown"
import { ReactElement } from "react"
import rehypeRaw from "rehype-raw"
import remarkUnwrapImages from "remark-unwrap-images"
import { markUpLanguageToComponentMap } from "./markup-language-to-component-map"

export function RenderMarkdownText({
  markdownText,
}: {
  markdownText: string
}): ReactElement {
  return (
    <Markdown
      className={`text-black w-full`}
      remarkPlugins={[remarkUnwrapImages]}
      rehypePlugins={[rehypeRaw]}
      components={markUpLanguageToComponentMap}
    >
      {markdownText}
    </Markdown>
  )
}
