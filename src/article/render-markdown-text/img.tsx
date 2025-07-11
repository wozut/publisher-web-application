import { ExtraProps } from "react-markdown";
import { ClassAttributes, ImgHTMLAttributes, ReactElement } from "react";
import Image from "next/image";
import { imageNotFoundPath } from "@/src/imageNotFoundPath";
import { isBlob } from "@/libraries/value-definition/isBlob";
import { blobToString } from "@/libraries/blob/blobToString";
import { isNullish } from "@/libraries/value-definition/isNullish";

export async function IMG({
  src,
  alt,
  width,
  height,
  ...rest
}: ClassAttributes<HTMLImageElement> &
  ImgHTMLAttributes<HTMLImageElement> &
  ExtraProps): Promise<ReactElement> {
  const source: string = isNullish(src)
    ? imageNotFoundPath
    : isBlob(src)
      ? await blobToString(src)
      : src;

  const alternate: string = isNullish(alt) ? "" : alt;

  return (
    <div className="relative w-full h-[14rem] sm:h-[26rem] md:h-[32rem]">
      <Image
        src={source}
        alt={alternate}
        fill={true}
        quality={100}
        className="mb-1"
        style={{ objectFit: "contain" }}
        {...rest}
      />
    </div>
  );
}
