import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function H6({
  children,
  ...rest
}: ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement> &
  ExtraProps): ReactElement {
  return (
    <h6
      className="font-semibold text-base sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-2 mt-5"
      {...rest}
    >
      {children}
    </h6>
  );
}
