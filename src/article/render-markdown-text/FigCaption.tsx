import { ReactElement } from "react"
import IntrinsicElements = React.JSX.IntrinsicElements
import { ExtraProps } from "react-markdown"

export function FigCaption({
  children,
  style,
  node,
  ...rest
}: IntrinsicElements["figcaption"] & ExtraProps): ReactElement {
  return (
    <figcaption className="font-light text-sm leading-normal" {...rest}>
      {children}
    </figcaption>
  )
}
