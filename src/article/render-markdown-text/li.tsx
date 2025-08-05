import React, { ClassAttributes, LiHTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";
import { isString } from "@/libraries/value-definition/isString";

export function LI({
  children,
  ...rest
}: ClassAttributes<HTMLLIElement> &
  LiHTMLAttributes<HTMLLIElement> &
  ExtraProps): ReactElement {
  return (
    <li className="regular-article-text list-item-margin-y" {...rest}>
      {React.Children.toArray(children).map((child, index) =>
        isString(child) ? <span key={index}>{child}</span> : child,
      )}
    </li>
  );
}
