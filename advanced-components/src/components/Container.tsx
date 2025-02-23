import {
  ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

// Elementtype: identifier of the contianer
// T should be incoming component identifier
//
type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
}
