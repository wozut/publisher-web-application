import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function H3({
  children,
  ...rest
}: ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement> &
  ExtraProps): ReactElement {
  return (
    <h3
      className="font-semibold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-2 mt-5"
      {...rest}
    >
      {children}
    </h3>
  );
}
