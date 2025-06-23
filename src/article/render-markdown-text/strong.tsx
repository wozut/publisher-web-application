import { ReactElement } from "react"
import IntrinsicElements = React.JSX.IntrinsicElements
import { ExtraProps } from "react-markdown"

export function Strong({
  children,
  className,
  node,
  ...rest
}: IntrinsicElements["strong"] & ExtraProps): ReactElement {
  return (
    <strong className="font-bold" {...rest}>
      {children}
    </strong>
  )
}
