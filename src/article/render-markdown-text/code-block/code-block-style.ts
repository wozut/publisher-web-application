import { CSSProperties } from "react"
import { cb } from "react-syntax-highlighter/dist/esm/styles/prism"

/**
 Other styles that could apply:
 okaidia
 tomorrow
 a11yDark
 atomDark
 cb
 coldarkDark
 darcula
 dracula
 duotoneDark
 gruvboxDark
 lucario
 materialDark
 materialOceanic
 nightOwl
 oneDark
 vscDarkPlus
 xonokai
 */

export const codeBlockStyle = cb as {
  [key: string]: CSSProperties
}
