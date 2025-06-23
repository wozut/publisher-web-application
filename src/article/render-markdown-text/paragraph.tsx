import { ReactElement } from "react"
import IntrinsicElements = React.JSX.IntrinsicElements
import { ExtraProps } from "react-markdown"
import {normalArticleTextStyle} from "@/src/article/render-markdown-text/NormalArticleTextStyle";

export function Paragraph({
  children,
  style,
  node,
  ...rest
}: IntrinsicElements["p"] & ExtraProps): ReactElement {
  return (
    <p className={`${normalArticleTextStyle} mb-4`} {...rest}>
      {children}
    </p>
  )
}
