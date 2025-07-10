import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";
import { NextFont } from "next/dist/compiled/@next/font";
import { JetBrains_Mono } from "next/font/google";
import { normalArticleTextStyle } from "@/src/article/render-markdown-text/NormalArticleTextStyle";

const jetBrainsMono: NextFont = JetBrains_Mono({ subsets: ["latin"] });

export function Code({
  children,
  ...rest
}: ClassAttributes<HTMLElement> &
  HTMLAttributes<HTMLElement> &
  ExtraProps): ReactElement {
  return (
    <code
      {...rest}
      className={`${jetBrainsMono.className} ${normalArticleTextStyle} !text-[1rem] px-[0.25rem] py-[0.125rem] bg-bit-of-blue rounded-[0.25rem]`}
    >
      {children}
    </code>
  );
}
