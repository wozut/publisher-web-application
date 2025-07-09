import { ReactElement } from "react";
import IntrinsicElements = React.JSX.IntrinsicElements;
import { ExtraProps } from "react-markdown";

export function H4({
  children,
  style,
  node,
  ...rest
}: IntrinsicElements["h4"] & ExtraProps): ReactElement {
  return (
    <h4
      className="font-semibold text-[1.5rem] leading-[2.5rem] mb-4 mt-9"
      {...rest}
    >
      {children}
    </h4>
  );
}
