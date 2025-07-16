import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function H1({
  children,
  ...rest
}: ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement> &
  ExtraProps): ReactElement {
  return (
    <h1
      className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-1"
      {...rest}
    >
      {children}
    </h1>
  );
}
