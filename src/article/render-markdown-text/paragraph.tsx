import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function Paragraph({
  children,
  ...rest
}: ClassAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLParagraphElement> &
  ExtraProps): ReactElement {
  return (
    <p className="normal-article-text article-block-margin-y" {...rest}>
      {children}
    </p>
  );
}
