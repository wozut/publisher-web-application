import { ClassAttributes, HTMLAttributes, ReactElement } from "react";
import { ExtraProps } from "react-markdown";

export function Code({
  children,
  className,
  class: languageClass,
  ...rest
}: ClassAttributes<HTMLElement> &
  HTMLAttributes<HTMLElement> &
  ExtraProps & { class?: string }): ReactElement {
  // Combine the fixed "code" class with any language class from the "class" attribute
  // and any className that might be passed directly
  const combinedClassName = `code ${languageClass || ''} ${className || ''}`.trim();
  
  return (
    <code className={combinedClassName} {...rest}>
      {children}
    </code>
  );
}
