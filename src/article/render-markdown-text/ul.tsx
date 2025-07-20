import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function UL({
  children,
  ...rest
}: ClassAttributes<HTMLUListElement> &
  HTMLAttributes<HTMLUListElement> &
  ExtraProps): ReactElement {
  return (
    <ul
      className="list-disc list-outside ml-5 article-block-margin-y"
      {...rest}
    >
      {children}
    </ul>
  );
}
