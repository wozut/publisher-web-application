import {
  ReactElement,
  Children,
  isValidElement,
  ComponentProps,
  ClassAttributes,
  HTMLAttributes,
} from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ExtraProps } from "react-markdown";
import { codeBlockStyle } from "./code-block/code-block-style";
import { Code } from "./code";
import { jetBrainsMono } from "@/app/fonts";

export function Pre({
  children,
}: ClassAttributes<HTMLPreElement> &
  HTMLAttributes<HTMLPreElement> &
  ExtraProps): ReactElement {
  const mappedChildren = Children.map(children, (child) => {
    if (
      isValidElement(child) &&
      (child.props as ComponentProps<typeof Code>).node?.tagName === "code"
    ) {
      const fontStyle = {
        ...jetBrainsMono.style,
      };

      const props = child.props as { className: string; children: string };
      const language = props.className?.split("language-")[1];

      return (
        <div className={`overflow-x-auto rounded-2xl w-full mb-2 code-text`}>
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
    }

    return child;
  });

  return <pre>{mappedChildren}</pre>;
}
