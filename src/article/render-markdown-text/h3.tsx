import { ReactElement } from "react"
import IntrinsicElements = React.JSX.IntrinsicElements
import { ExtraProps } from "react-markdown"

export function H3({
  children,
  style,
  node,
  ...rest
}: IntrinsicElements["h3"] & ExtraProps): ReactElement {
  return (
    <h3
      className="font-semibold text-[1.8rem] leading-[2.5rem] mb-4 mt-9"
      {...rest}
    >
      {children}
    </h3>
  )
}
