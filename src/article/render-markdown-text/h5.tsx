import { ReactElement } from "react"
import IntrinsicElements = React.JSX.IntrinsicElements
import { ExtraProps } from "react-markdown"

export function H5({
  children,
  style,
  node,
  ...rest
}: IntrinsicElements["h5"] & ExtraProps): ReactElement {
  return (
    <h5
      className="font-semibold text-[1.2rem] leading-[2.5rem] mb-4 mt-9"
      {...rest}
    >
      {children}
    </h5>
  )
}
