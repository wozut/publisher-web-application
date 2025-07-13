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
    <div className={"@container w-full"}>
      <div className="relative mx-auto max-w-[100cqw] aspect-[2.5] w-full ">
        <Image
          src={source}
          alt={alternate}
          fill={true}
          quality={100}
          className="border border-amber-700"
          style={{ objectFit: "contain" }}
          {...rest}
        />
      </div>
    </div>
  );
}
