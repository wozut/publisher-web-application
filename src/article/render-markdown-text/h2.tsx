import { ReactElement } from "react";
import IntrinsicElements = React.JSX.IntrinsicElements;
import { ExtraProps } from "react-markdown";

export function H2({
  children,
  ...rest
}: IntrinsicElements["h2"] & ExtraProps): ReactElement {
  return (
    <h2
      className="font-semibold text-[2.1rem] leading-[2.5rem] mb-4 mt-9"
      {...rest}
    >
      {children}
    </h2>
  );
}
