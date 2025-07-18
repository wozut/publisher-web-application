import { ExtraProps } from "react-markdown";
import { ClassAttributes, ImgHTMLAttributes, ReactElement } from "react";
import Image from "next/image";
import { imageNotFoundPath } from "@/src/imageNotFoundPath";
import { isBlob } from "@/libraries/value-definition/isBlob";
import { blobToString } from "@/libraries/blob/blobToString";
import { isNullish } from "@/libraries/value-definition/isNullish";
import { isNumber } from "@/libraries/value-definition/isNumber";
import { isDefined } from "@/libraries/value-definition/isDefined";

type NextImageDimension = number | `${number}` | undefined;

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

  let nextWidth: NextImageDimension = undefined;
  if (isDefined(width)) {
    if (isNumber(width)) {
      nextWidth = width;
    } else {
      const parsedWidth = parseInt(width, 10);
      if (!isNaN(parsedWidth)) {
        nextWidth = parsedWidth;
      } else {
        nextWidth = `${width}` as `${number}`;
      }
    }
  }

  let nextHeight: NextImageDimension = undefined;
  if (isDefined(height)) {
    if (isNumber(height)) {
      nextHeight = height;
    } else {
      const parsedHeight = parseInt(height, 10);
      if (!isNaN(parsedHeight)) {
        nextHeight = parsedHeight;
      } else {
        nextHeight = `${height}` as `${number}`;
      }
    }
  }

  return (
    <div className="relative w-full aspect-video">
      <Image
        src={source}
        alt={alternate}
        fill={true}
        quality={100}
        className=""
        style={{ objectFit: "contain" }}
        {...(nextWidth !== undefined ? { width: nextWidth } : {})}
        {...(nextHeight !== undefined ? { height: nextHeight } : {})}
        {...rest}
      />
    </div>
  );
}
