import { AnchorHTMLAttributes, ClassAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";
import { MdOpenInNew } from "react-icons/md";
import { MdLink } from "react-icons/md";

function getLinkIcon(
  target: "_self" | "_blank" | "_parent" | "_top" | (string & {}) | undefined,
) {
  const className = "self-start w-4";
  if (target === "_blank") return <MdOpenInNew className={className} />;
  if (target === "_self") return <MdLink className={className} />;
  return <span className={"hidden"}></span>;
}

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
      className={
        "font-medium hover:drop-shadow-[0_0_0.050rem_rgba(0,0,0,1)]/100 active:drop-shadow-[0_0_0.025rem_rgba(0,0,0,1)]/100"
      }
      href={href}
      target={target}
      {...rest}
    >
      <span className={"inline-flex flex-row"}>
        <span className={"self-baseline"}>{children}</span>
        {getLinkIcon(target)}
      </span>
    </a>
  );
}
