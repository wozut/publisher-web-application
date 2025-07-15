import { JetBrains_Mono } from "next/font/google";
import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export function Code({
  children,
  ...rest
}: ClassAttributes<HTMLElement> &
  HTMLAttributes<HTMLElement> &
  ExtraProps): ReactElement {
  return (
    <code
      className={`${jetBrainsMono.className} normal-article-text px-1 py-0.5 bg-gray-300 rounded-[0.25rem]`}
      {...rest}
    >
      {children}
    </code>
  );
}
