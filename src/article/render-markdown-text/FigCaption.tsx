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
      className="font-light text-sm leading-normal mt-1 text-white"
      {...rest}
    >
      {children}
    </figcaption>
  );
}
