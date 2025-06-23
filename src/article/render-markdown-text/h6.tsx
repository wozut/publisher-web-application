import { ReactElement } from "react"
import IntrinsicElements = React.JSX.IntrinsicElements
import { ExtraProps } from "react-markdown"

export function H6({
  children,
  style,
  node,
  ...rest
}: IntrinsicElements["h6"] & ExtraProps): ReactElement {
  return (
    <h6
      className="font-semibold text-[1.175rem] leading-[2.5rem] mb-4 mt-9"
      {...rest}
    >
      {children}
    </h6>
  )
}
