// components/Button/Button.tsx
import React from "react";
import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...rest
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
