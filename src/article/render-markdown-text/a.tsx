import { ReactElement } from "react"
import IntrinsicElements = React.JSX.IntrinsicElements
import { ExtraProps } from "react-markdown"

export function A({
  children,
  href,
  target = "_blank",
  node,
  style,
  ...rest
}: IntrinsicElements["a"] & ExtraProps): ReactElement {
  return (
    <a
      className={"font-semibold text-charcoal-blue hover:drop-shadow-cs"}
      href={href}
      target={target}
      {...rest}
    >
      {children}
    </a>
  )
}
