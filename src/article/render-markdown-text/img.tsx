import { ExtraProps } from "react-markdown";
import { ClassAttributes, ImgHTMLAttributes, ReactElement } from "react";
import Image from "next/image";

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
    <div className="relative w-full h-[14rem] sm:h-[26rem] md:h-[32rem]">
      <Image
        src={src}
        alt={alt}
        fill={true}
        quality={100}
        className="mb-1"
        style={{ objectFit: "contain" }}
        {...rest}
      />
    </div>
  );
}
