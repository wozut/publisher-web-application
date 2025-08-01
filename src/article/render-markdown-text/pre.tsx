import {
  ReactElement,
  Children,
  isValidElement,
  ClassAttributes,
  HTMLAttributes,
} from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ExtraProps } from "react-markdown";
import { codeBlockStyle } from "./code-block/code-block-style";
import { jetBrainsMono } from "@/app/fonts";
import { isUndefined } from "@/libraries/value-definition/isUndefined";
import { isDefined } from "@/libraries/value-definition/isDefined";

export function Pre({
  children,
}: ClassAttributes<HTMLPreElement> &
  HTMLAttributes<HTMLPreElement> &
  ExtraProps): ReactElement {
  const transformedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;

    const props = child.props as {
      className: string;
      class: string;
      children: string;
    };

    const finalClassName: string | undefined = isDefined(props.className)
      ? props.className
      : isDefined(props.class)
        ? props.class
        : undefined;

    if (isUndefined(finalClassName)) return child;

    const languagePrefix = "language-";
    if (!finalClassName.startsWith(languagePrefix)) return child;

    const language: string = finalClassName.replace(languagePrefix, "");

    const fontStyle = {
      ...jetBrainsMono.style,
    };

    return (
      <div
        className={`overflow-x-auto rounded-xl w-full article-block-margin-y code-text`}
      >
        <SyntaxHighlighter
          showLineNumbers={true}
          PreTag="pre"
          CodeTag={"code"}
          language={language}
          style={codeBlockStyle}
          customStyle={{
            margin: "unset",
            paddingLeft: "4px",
            paddingRight: "24px",
            paddingTop: "15px",
            paddingBottom: "15px",
          }}
          wrapLines={true}
          lineProps={{ style: fontStyle }}
        >
          {String(props.children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      </div>
    );
  });

  return <pre>{transformedChildren}</pre>;
}
