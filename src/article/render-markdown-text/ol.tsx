import { ReactElement } from "react";
import IntrinsicElements = React.JSX.IntrinsicElements;
import { ExtraProps } from "react-markdown";

export function OL({
  children,
  ...rest
}: IntrinsicElements["ol"] & ExtraProps): ReactElement {
  return (
    <ol className="list-decimal list-outside ml-10 mb-4" {...rest}>
      {children}
    </ol>
  );
}
