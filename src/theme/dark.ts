import { Theme } from "./types";

export const darkTheme: Theme = {
  mode: "dark",

  colors: {
    primary: "#10b981",         // Emerald-500 (green)
    primaryHover: "#059669",    // Emerald-600
    secondary: "#374151",       // Gray-700
    background: "#111827",      // Gray-900 (very dark)
    surface: "#1f2937",         // Gray-800 for cards/panels
    text: "#f3f4f6",            // Light gray (near white)
    muted: "#9ca3af",           // Gray-400
    error: "#f87171",           // Red-400
    warning: "#fbbf24",         // Amber-400
    success: "#22c55e",         // Green-500
  },

  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },

  typography: {
    fontFamily: `"Inter", "Helvetica Neue", sans-serif`,
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
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
    sm: "0 1px 2px rgba(0, 0, 0, 0.3)",
    md: "0 4px 6px rgba(0, 0, 0, 0.4)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.5)",
  },

  zIndex: {
    base: 0,
    dropdown: 10,
    overlay: 20,
    modal: 30,
    toast: 40,
  }
};
