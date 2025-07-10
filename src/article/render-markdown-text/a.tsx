import { AnchorHTMLAttributes, ClassAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function A({
  children,
  href,
  target = "_blank",
  ...rest
}: ClassAttributes<HTMLAnchorElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  ExtraProps): ReactElement {
  return (
    <a
      className={"font-semibold text-charcoal-blue hover:drop-shadow-cs"}
      href={href}
      target={target}
      {...rest}
    >
      {children}
    </a>
  );
}
