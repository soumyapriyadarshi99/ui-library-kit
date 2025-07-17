import styled from "@emotion/styled";
import { ButtonProps } from "./types";

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  ${({ size = "md", theme }) => {
    const { spacing, typography } = theme;
    const paddings = {
      sm: `${spacing.xs} ${spacing.md}`,
      md: `${spacing.sm} ${spacing.lg}`,
      lg: `${spacing.md} ${spacing.xl}`,
    };
    const fontSizes = {
      sm: typography.fontSize.sm,
      md: typography.fontSize.base,
      lg: typography.fontSize.lg,
    };

    return `
      padding: ${paddings[size]};
      font-size: ${fontSizes[size]};
    `;
  }}

  ${({ variant = "primary", theme }) => {
    const { colors } = theme;

    switch (variant) {
      case "secondary":
        return `
          background-color: ${colors.surface};
          color: ${colors.text};
          border: 1px solid ${colors.muted};
        `;
      case "outline":
        return `
          background-color: transparent;
          color: ${colors.text};
          border: 1px solid ${colors.muted};
        `;
      case "ghost":
        return `
          background-color: transparent;
          color: ${colors.text};
          border: none;
        `;
      default:
        return `
          background-color: ${colors.primary};
          color: #fff;
          &:hover {
            background-color: ${colors.primaryHover};
          }
        `;
    }
  }}
`;
