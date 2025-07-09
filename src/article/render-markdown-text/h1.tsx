import { ReactElement } from "react";
import IntrinsicElements = React.JSX.IntrinsicElements;
import { ExtraProps } from "react-markdown";

export function H1({
  children,
  style,
  node,
  ...rest
}: IntrinsicElements["h1"] & ExtraProps): ReactElement {
  return (
    <h1
      className="font-semibold text-[2.4rem] leading-[2.5rem] mb-4 mt-9"
      {...rest}
    >
      {children}
    </h1>
  );
}
