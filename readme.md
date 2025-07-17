## 📦 Installation & Setup

Install the package using npm or yarn:

npm install ui-components--kit
# or
yarn add ui-components--kit

🧩 Peer Dependencies
Make sure you have the following peer dependencies installed in your project:
npm install react react-dom
# or
yarn add react react-dom
🔧 Setup Theme Provider


Wrap your app in the AppThemeProvider to enable theming support:

// main.tsx or App.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { AppThemeProvider } from "ui-components--kit";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppThemeProvider theme="light"> {/* or "dark" */}
      <App />
    </AppThemeProvider>
  </React.StrictMode>
);

🧪 Example Usage
import { Button } from "ui-components--kit";
export default function Example() {
  return (
    <div>
      <Button variant="primary" onClick={() => alert("Clicked!")}>
        Primary
      </Button>

      <Button variant="ghost" onClick={() => alert("Ghost clicked!")}>
        Ghost
      </Button>
    </div>
  );
}

🎨 Dynamic Theme Toggling Example

import { AppThemeProvider } from "ui-components--kit";
import { useState } from "react";
import App from "./App";

function Root() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <AppThemeProvider theme={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      <App />
    </AppThemeProvider>
  );
}