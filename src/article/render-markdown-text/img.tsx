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
    <div className={"bg-gray-300 w-full p-2"}>
      <div className="relative w-full aspect-video">
        <Image
          src={source}
          alt={alternate}
          fill={true}
          quality={100}
          className=""
          style={{ objectFit: "contain" }}
          {...rest}
        />
      </div>
    </div>
  );
}
