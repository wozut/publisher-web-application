import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function Paragraph({
  children,
  ...rest
}: ClassAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLParagraphElement> &
  ExtraProps): ReactElement {
  return (
    <p className="normal-article-text my-2" {...rest}>
      {children}
    </p>
  );
}
