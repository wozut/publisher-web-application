import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function H2({
  children,
  ...rest
}: ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement> &
  ExtraProps): ReactElement {
  return (
    <h2
      className="font-semibold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl article-block-margin-y"
      {...rest}
    >
      {children}
    </h2>
  );
}
