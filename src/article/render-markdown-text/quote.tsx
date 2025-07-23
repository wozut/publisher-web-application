import { ClassAttributes, QuoteHTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function Q({
  children,
  opening,
  closing,
  ...rest
}: ClassAttributes<HTMLQuoteElement> &
  QuoteHTMLAttributes<HTMLQuoteElement> &
  ExtraProps & { opening?: string; closing?: string }): ReactElement {
  return (
    <q {...rest}>
      {opening}
      {children}
      {closing}
    </q>
  );
}
