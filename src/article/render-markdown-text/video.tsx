import { ExtraProps } from "react-markdown";
import { ClassAttributes, ReactElement, VideoHTMLAttributes } from "react";

export function Video({
  src,
}: ClassAttributes<HTMLVideoElement> &
  VideoHTMLAttributes<HTMLVideoElement> &
  ExtraProps): ReactElement {
  return <video src={src} autoPlay controls className="object-fit" />;
}
