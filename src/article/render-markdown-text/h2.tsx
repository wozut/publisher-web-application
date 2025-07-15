import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function H2({
  children,
  ...rest
}: ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement> &
  ExtraProps): ReactElement {
  return (
    <h2 className="font-semibold text-3xl mb-2 mt-5" {...rest}>
      {children}
    </h2>
  );
}
