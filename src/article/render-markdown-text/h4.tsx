import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function H4({
  children,
  ...rest
}: ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement> &
  ExtraProps): ReactElement {
  return (
    <h4
      className="font-semibold text-xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-2 mt-5"
      {...rest}
    >
      {children}
    </h4>
  );
}
