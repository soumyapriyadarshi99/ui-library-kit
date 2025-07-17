import { Theme } from "./types";

export const darkTheme: Theme = {
  mode: "dark",

  colors: {
    primary: "#818cf8",         // Indigo-400
    primaryHover: "#6366f1",    // Indigo-500
    secondary: "#2a2e35",       // Dark muted gray
    background: "#1c1f24",      // Soft near-black
    surface: "#2a2e35",         // Used for cards, panels, etc.
    text: "#e5e7eb",            // Light gray (not white)
    muted: "#9ca3af",           // Gray-400
    error: "#f87171",           // Red-400
    warning: "#fbbf24",         // Amber-400
    success: "#34d399",         // Green-400
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
