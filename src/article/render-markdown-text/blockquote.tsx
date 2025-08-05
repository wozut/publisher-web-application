import { BlockquoteHTMLAttributes, ClassAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function Blockquote({
  children,
}: ClassAttributes<HTMLQuoteElement> &
  BlockquoteHTMLAttributes<HTMLQuoteElement> &
  ExtraProps): ReactElement {
  return (
    <blockquote className="flex flex-row w-full gap-0.5 article-block-margin-y">
      <span className={"self-start font-semibold text-blockquote-symbols"}>
        «
      </span>
      <span className="overflow-x-auto regular-article-text text-start w-full">
        {children}
      </span>
      <span className={"self-end font-semibold text-blockquote-symbols"}>
        »
      </span>
    </blockquote>
  );
}
