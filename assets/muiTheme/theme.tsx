import { createTheme } from "@mui/material";
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    medium: true;
  }
}

export const theme = createTheme({
  palette: {
    background: {
      default: "#141414",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: ["Netflix Regular"].join(""),
    fontSize: 16,
  },
  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      medium: 1080,
    },
  },
});
