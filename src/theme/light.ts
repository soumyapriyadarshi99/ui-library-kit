import { Theme } from "./types";

export const lightTheme: Theme = {
  mode: "light",

  colors: {
    primary: "#4f46e5",
    primaryHover: "#4338ca",
    secondary: "#f3f4f6",
    background: "#ffffff",
    surface: "#f9fafb",
    text: "#111827",
    muted: "#6b7280",
    error: "#ef4444",
    warning: "#f59e0b",
    success: "#22c55e",
  },

  spacing: {
    xs: "0.25rem",   // 4px
    sm: "0.5rem",    // 8px
    md: "1rem",      // 16px
    lg: "1.5rem",    // 24px
    xl: "2rem",      // 32px
  },

  typography: {
    fontFamily: `"Inter", "Helvetica Neue", sans-serif`,
    fontSize: {
      xs: "0.75rem",   // 12px
      sm: "0.875rem",  // 14px
      base: "1rem",    // 16px
      lg: "1.125rem",  // 18px
      xl: "1.25rem",   // 20px
      "2xl": "1.5rem", // 24px
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    }
  },

  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    full: "9999px",
  },

  shadow: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.15)",
  },

  zIndex: {
    base: 0,
    dropdown: 10,
    overlay: 20,
    modal: 30,
    toast: 40,
  }
};
