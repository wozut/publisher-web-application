import { ReactElement } from "react";
import parse, {
  HTMLReactParserOptions,
  Element,
  domToReact,
  DOMNode,
} from "html-react-parser";
import { markUpLanguageToComponentMap } from "./markup-language-to-component-map";
import { isUndefined } from "@/libraries/value-definition/isUndefined";

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
        children: domToReact(domNode.children as DOMNode[], options),
      };
      return <CustomComponent {...props} />;
    },
  };

  return <>{parse(htmlText, options)}</>;
}
