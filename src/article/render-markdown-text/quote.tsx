import { ClassAttributes, QuoteHTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function Q({
  children,
  ...rest
}: ClassAttributes<HTMLQuoteElement> &
  QuoteHTMLAttributes<HTMLQuoteElement> &
  ExtraProps): ReactElement {
  return <q {...rest}>{children}</q>;
}
