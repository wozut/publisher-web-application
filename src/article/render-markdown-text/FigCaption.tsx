import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function FigCaption({
  children,
  ...rest
}: ClassAttributes<HTMLElement> &
  HTMLAttributes<HTMLElement> &
  ExtraProps): ReactElement {
  return (
    <figcaption
      className="font-light text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl"
      {...rest}
    >
      {children}
    </figcaption>
  );
}
