import React, { ClassAttributes, LiHTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function LI({
  children,
  ...rest
}: ClassAttributes<HTMLLIElement> &
  LiHTMLAttributes<HTMLLIElement> &
  ExtraProps): ReactElement {
  return (
    <li className="normal-article-text" {...rest}>
      {React.Children.toArray(children).map((child, index) =>
        typeof child === "string" ? <span key={index}>{child}</span> : child,
      )}
    </li>
  );
}
