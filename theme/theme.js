import { createTheme } from "@mui/material/styles";

export const getTheme = (mode = "dark") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#0b2a4a" }, // example brand color for light
            background: { default: "#fafafa", paper: "#ffffff" },
            text: { primary: "#0b0b0b", secondary: "rgba(0,0,0,0.65)" },
          }
        : {
            primary: { main: "#ffffff" }, // brand color for dark
            background: { default: "#0b0b0c", paper: "#141416" },
            text: { primary: "#ffffff", secondary: "rgba(255,255,255,0.7)" },
          }),
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
      MuiAppBar: { defaultProps: { elevation: 0 } },
      MuiButton: { defaultProps: { disableElevation: true } },
    },
  });

export default getTheme;
