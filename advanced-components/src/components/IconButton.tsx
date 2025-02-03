import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type IconButtonProps = {
  icon: ElementType;
  onClick: () => void;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export function IconButton({
  // icon is aliased to Icon because it should be use dlike a custom component name
  icon: Icon,
  children,
  ...otherProps
}: IconButtonProps) {
  return (
    <button {...otherProps}>
      <span>
        <Icon />
      </span>
      <span>{children}</span>
    </button>
  );
}
