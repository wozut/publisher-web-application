import { ExtraProps } from "react-markdown";
import { ReactElement } from "react";
import IntrinsicElements = React.JSX.IntrinsicElements;

export function IMG({
  src,
  alt,
  width,
  height,
  ...rest
}: IntrinsicElements["img"] & ExtraProps): ReactElement {
  return (
    <img
      src={src}
      alt={alt}
      className="rounded-lg object-contain mb-1"
      {...rest}
    />
  );
}
