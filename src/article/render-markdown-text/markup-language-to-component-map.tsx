import { Components, ExtraProps } from "react-markdown";
import { Paragraph } from "./paragraph";
import { H1 } from "./h1";
import { H2 } from "./h2";
import { H3 } from "./h3";
import { H4 } from "./h4";
import { UL } from "./ul";
import { A } from "./a";
import { Pre } from "./pre";
import { OL } from "./ol";
import { Blockquote } from "./blockquote";
import { LI } from "./li";
import { Code } from "./code";
import { Strong } from "./strong";
import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { H5 } from "./h5";
import { H6 } from "./h6";
import { IMG } from "./img";
import { Video } from "./video";
import { Emphasis } from "@/src/article/render-markdown-text/Emphasis";
import { Figure } from "./figure";
import { FigCaption } from "@/src/article/render-markdown-text/FigCaption";
import { Q } from "@/src/article/render-markdown-text/quote";

type Props = ClassAttributes<HTMLElement> &
  HTMLAttributes<HTMLElement> &
  ExtraProps;
const strong = (props: Props): ReactElement => <Strong {...props} />;
const emphasis = (props: Props): ReactElement => <Emphasis {...props} />;

type ComponentsExtended = Record<string, (props: never) => ReactElement>;

export const markUpLanguageToComponentMap: Components & ComponentsExtended = {
  p: (props) => <Paragraph {...props} />,
  h1: (props) => <H1 {...props} />,
  h2: (props) => <H2 {...props} />,
  h3: (props) => <H3 {...props} />,
  h4: (props) => <H4 {...props} />,
  h5: (props) => <H5 {...props} />,
  h6: (props) => <H6 {...props} />,
  ul: (props) => <UL {...props} />,
  ol: (props) => <OL {...props} />,
  li: (props) => <LI {...props} />,
  q: (props) => <Q {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
  a: (props) => <A {...props} />,
  pre: (props) => <Pre {...props} />,
  code: (props) => <Code {...props} />,
  strong: strong,
  b: strong,
  em: emphasis,
  i: emphasis,
  img: (props) => <IMG {...props} />,
  video: (props) => <Video {...props} />,
  figure: (props) => <Figure {...props} />,
  figcaption: (props) => <FigCaption {...props} />,
};
