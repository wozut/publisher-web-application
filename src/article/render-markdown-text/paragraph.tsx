import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";
import { normalArticleTextStyle } from "@/src/article/render-markdown-text/NormalArticleTextStyle";

export function Paragraph({
  children,
  ...rest
}: ClassAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLParagraphElement> &
  ExtraProps): ReactElement {
  return (
    <p className={`${normalArticleTextStyle} mb-4`} {...rest}>
      {children}
    </p>
  );
}
