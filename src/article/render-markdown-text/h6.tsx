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
      className="font-semibold text-[1.175rem] leading-[2.5rem] mb-4 mt-9"
      {...rest}
    >
      {children}
    </h6>
  );
}
