import { ClassAttributes, QuoteHTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function Q({
  children,
  openingsymbol,
  closingsymbol,
  ...rest
}: ClassAttributes<HTMLQuoteElement> &
  QuoteHTMLAttributes<HTMLQuoteElement> &
  ExtraProps): ReactElement {
  return (
    <q {...rest}>
      {openingsymbol}
      {children}
      {closingsymbol}
    </q>
  );
}
