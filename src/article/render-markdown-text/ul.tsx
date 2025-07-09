import { ReactElement } from "react";
import IntrinsicElements = React.JSX.IntrinsicElements;
import { ExtraProps } from "react-markdown";

export function UL({
  children,
  style,
  node,
  ...rest
}: IntrinsicElements["ul"] & ExtraProps): ReactElement {
  return (
    <ul className="list-disc list-outside ml-10 mb-4" {...rest}>
      {children}
    </ul>
  );
}
