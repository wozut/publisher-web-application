import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function H5({
  children,
  ...rest
}: ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement> &
  ExtraProps): ReactElement {
  return (
    <h5 className="font-semibold text-lg mb-2 mt-5" {...rest}>
      {children}
    </h5>
  );
}
