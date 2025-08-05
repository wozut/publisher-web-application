import { ReactElement } from "react";
import parse, {
  HTMLReactParserOptions,
  Element,
  domToReact,
  DOMNode,
} from "html-react-parser";
import { markUpLanguageToComponentMap } from "./markup-language-to-component-map";
import { isUndefined } from "@/libraries/value-definition/isUndefined";

const SELF_CLOSING_TAGS = ["img"];

export function RenderHtmlText({
  htmlText,
}: {
  htmlText: string;
}): ReactElement {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (!(domNode instanceof Element) || domNode.type !== "tag")
        return undefined;

      const tagName: string = domNode.name;
      const CustomComponent = markUpLanguageToComponentMap[tagName];

      if (isUndefined(CustomComponent)) return undefined;

      const props = {
        ...domNode.attribs,
        ...(SELF_CLOSING_TAGS.includes(tagName)
          ? {}
          : { children: domToReact(domNode.children as DOMNode[], options) }),
      };
      return <CustomComponent {...props} />;
    },
  };

  return <>{parse(htmlText, options)}</>;
}
