import { ClassAttributes, OlHTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function OL({
  children,
  ...rest
}: ClassAttributes<HTMLOListElement> &
  OlHTMLAttributes<HTMLOListElement> &
  ExtraProps): ReactElement {
  return (
    <ol className="list-decimal list-outside ml-10 mb-4" {...rest}>
      {children}
    </ol>
  );
}
