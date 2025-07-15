import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function UL({
  children,
  ...rest
}: ClassAttributes<HTMLUListElement> &
  HTMLAttributes<HTMLUListElement> &
  ExtraProps): ReactElement {
  return (
    <ul className="list-disc list-outside ml-5 mb-2" {...rest}>
      {children}
    </ul>
  );
}
