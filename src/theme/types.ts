export interface Theme {
    mode: "light" | "dark";
    colors: {
      primary: string;
      secondary:string;
      primaryHover: string;
      background: string;
      surface: string;
      text: string;
      muted: string;
      error: string;
      success: string;
      warning:string
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    typography: {
      fontFamily: string;
      fontSize: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        "2xl": string;
      };
      fontWeight: {
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
      };
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
      full: string;
    };
    shadow: {
      sm: string;
      md: string;
      lg: string;
    };
    zIndex: {
      base: number;
      dropdown: number;
      overlay: number;
      modal: number;
      toast: number;
    };
  }
  