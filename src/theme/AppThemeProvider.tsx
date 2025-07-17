import React from "react";
import { ThemeProvider } from "@emotion/react";
import {  lightTheme, darkTheme } from ".";
import { Theme as ThemeType } from "./types";

interface Props {
  children: React.ReactNode;
  mode?: "light" | "dark";
}

export const AppThemeProvider: React.FC<Props> = ({ children, mode = "light" }) => {
  const theme: ThemeType = mode === "dark" ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
