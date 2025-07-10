import { ReactElement } from "react";
import IntrinsicElements = React.JSX.IntrinsicElements;
import { ExtraProps } from "react-markdown";

export function Figure({
  children,
  ...rest
}: IntrinsicElements["figure"] & ExtraProps): ReactElement {
  return (
    <figure
      className="flex flex-col place-items-center items-center mb-4"
      {...rest}
    >
      {children}
    </figure>
  );
}
