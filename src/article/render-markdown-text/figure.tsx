import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function Figure({
  children,
  ...rest
}: ClassAttributes<HTMLElement> &
  HTMLAttributes<HTMLElement> &
  ExtraProps): ReactElement {
  return (
    <figure
      className="flex flex-col gap-1 place-items-center items-center article-block-margin-y w-full"
      {...rest}
    >
      {children}
    </figure>
  );
}
