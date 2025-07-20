import { BlockquoteHTMLAttributes, ClassAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function Blockquote({
  children,
}: ClassAttributes<HTMLQuoteElement> &
  BlockquoteHTMLAttributes<HTMLQuoteElement> &
  ExtraProps): ReactElement {
  return (
    <blockquote className="flex flex-row w-full gap-1 article-block-margin-y">
      <span className={"self-start font-semibold text-double-quote"}>“</span>
      <span className="overflow-x-auto regular-article-text text-start w-full">
        {children}
      </span>

      <span
        className={
          "h-[2.3rem] sm:h-[2.5rem] self-end font-semibold text-double-quote"
        }
      >
        ”
      </span>
    </blockquote>
  );
}
