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
      className="flex flex-col place-items-center items-center mb-2 bg-[#222222] w-full p-1 rounded-2xl"
      {...rest}
    >
      {children}
    </figure>
  );
}
