import { ReactElement } from "react";
import IntrinsicElements = React.JSX.IntrinsicElements;
import { ExtraProps } from "react-markdown";

export function Emphasis({
  children,
  className,
  node,
  ...rest
}: IntrinsicElements["em"] & ExtraProps): ReactElement {
  return (
    <em className="italic" {...rest}>
      {children}
    </em>
  );
}
