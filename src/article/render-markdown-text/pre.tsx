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
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

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
        fontFamily: "'JetBrains Mono', monospace",
        lineHeight: "1.5",
        fontSize: "1rem",
      };

      const props = child.props as { className: string; children: string };
      const language = props.className?.split("language-")[1];

      return (
        <div
          className={`overflow-x-auto rounded-[0.75rem] w-full max-w-full block min-w-0 mb-4`}
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
    }

    return child;
  });

  console.log(mappedChildren?.length);

  return <pre>{mappedChildren}</pre>;
}
