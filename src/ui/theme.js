import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#FF7B02",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#242729",
      main: "#1f2122",
      dark: "#000000",
    },
  },
  typography: {
    h1: {
      fontFamily: '"Abril Fatface", cursive',
    },
    h2: {
      fontFamily: '"Abril Fatface", cursive',
    },
    h4: {
      fontFamily: '"Abril Fatface", cursive',
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h3: {
      color: theme.palette.primary.main,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
