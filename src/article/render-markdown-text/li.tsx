import React, { ReactElement } from "react";
import IntrinsicElements = React.JSX.IntrinsicElements;
import { ExtraProps } from "react-markdown";
import { normalArticleTextStyle } from "./NormalArticleTextStyle";

export function LI({
  children,
  style,
  node,
  ...rest
}: IntrinsicElements["li"] & ExtraProps): ReactElement {
  return (
    <li className={`${normalArticleTextStyle}`} {...rest}>
      {React.Children.toArray(children).map((child, index) =>
        typeof child === "string" ? <span key={index}>{child}</span> : child,
      )}
    </li>
  );
}
