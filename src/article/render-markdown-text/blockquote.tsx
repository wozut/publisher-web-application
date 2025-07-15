import { BlockquoteHTMLAttributes, ClassAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function Blockquote({
  children,
}: ClassAttributes<HTMLQuoteElement> &
  BlockquoteHTMLAttributes<HTMLQuoteElement> &
  ExtraProps): ReactElement {
  return (
    <blockquote className="flex flex-row w-full gap-1 mb-2">
      <span
        className={
          "w-fit h-[1.4rem] sm:h-[2.5rem] self-start font-semibold text-5xl sm:text-8xl"
        }
      >
        “
      </span>
      <span className="overflow-x-auto pt-1 sm:pt-2 font-light text-start w-full">
        {children}
      </span>

      <span
        className={
          "w-fit h-[2.3rem] sm:h-[2.5rem] self-end font-semibold text-5xl sm:text-8xl"
        }
      >
        ”
      </span>
    </blockquote>
  );
}
