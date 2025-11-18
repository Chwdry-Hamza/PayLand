// src/index.tsx
import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { getTheme } from "./theme/theme";
import "./index.css";

function Root() {
  const defaultMode = localStorage.getItem("themeMode") || "dark";
  const [mode, setMode] = useState(defaultMode);

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", next);
      return next;
    });
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App mode={mode} toggleMode={toggleMode} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);  // Safe: we checked
  root.render(<Root />);
}