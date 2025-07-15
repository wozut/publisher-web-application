import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function H6({
  children,
  ...rest
}: ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement> &
  ExtraProps): ReactElement {
  return (
    <h6 className="font-semibold text-base mb-2 mt-5" {...rest}>
      {children}
    </h6>
  );
}
