// emotion.d.ts
import "@emotion/react";
import { Theme as ThemeType } from "./types"; // Adjust the path if needed

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}