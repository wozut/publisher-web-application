import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function H5({
  children,
  ...rest
}: ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement> &
  ExtraProps): ReactElement {
  return (
    <h5
      className="font-semibold text-lg sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl my-2"
      {...rest}
    >
      {children}
    </h5>
  );
}
