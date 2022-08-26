import { createTheme } from "@mui/material";
import { typography } from "./typography";
import { colors } from "./colors";

const theme = createTheme({
  typography,
  spacing: 2,
  breakpoints: {
    values: {
      xs: 0,
      sm: 767,
      md: 999,
      lg: 1239,
      xl: 1488,
    },
  },
  palette: {
    primary: {
      main: colors.base.black,

    },
    text: {
      primary: colors.text.primary
    },
  },
});

export default theme;