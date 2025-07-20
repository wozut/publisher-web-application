import { ClassAttributes, OlHTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function OL({
  children,
  ...rest
}: ClassAttributes<HTMLOListElement> &
  OlHTMLAttributes<HTMLOListElement> &
  ExtraProps): ReactElement {
  return (
    <ol className="list-decimal list-outside ml-5 my-2" {...rest}>
      {children}
    </ol>
  );
}
