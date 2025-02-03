// Example: A Card component that has multiple "slots" for content
// Main slot => children prop
// Actions slot => actions prop
import { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
  // "Actions" is like an extra "slot" of this component
  // It's the same type as the children prop, since we expect JSX code as a prop value
  actions: ReactNode;
};
export default function Card({ title, children, actions }: CardProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
      {actions}
    </section>
  );
}
