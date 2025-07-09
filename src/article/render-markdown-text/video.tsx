import { ExtraProps } from "react-markdown";
import { ReactElement } from "react";
import IntrinsicElements = React.JSX.IntrinsicElements;

export function Video({
  children,
  src,
  className,
  node,
  width,
  height,
  ...rest
}: IntrinsicElements["video"] & ExtraProps): ReactElement {
  return (
    <video src={src} autoPlay controls className="rounded-lg object-fit mb-1" />
  );
}
