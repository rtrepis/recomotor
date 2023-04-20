import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#99FF00",
      main: "#1B7D20",
      dark: "#175C1A",
      contrastText: "#F3F3F3",
    },
    secondary: {
      light: "#CCCCCC",
      main: "#D9D9D9",
      dark: "#A6A6A6",
      contrastText: "#252525",
    },
  },
});

export default theme;
