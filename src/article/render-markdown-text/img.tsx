import { ExtraProps } from "react-markdown";
import { ClassAttributes, ImgHTMLAttributes, ReactElement } from "react";

export function IMG({
  src,
  alt,
  width,
  height,
  ...rest
}: ClassAttributes<HTMLImageElement> &
  ImgHTMLAttributes<HTMLImageElement> &
  ExtraProps): ReactElement {
  return (
    <img
      src={src}
      alt={alt}
      className="rounded-lg object-contain mb-1"
      {...rest}
    />
  );
}
