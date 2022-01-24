import * as Mui from "@mui/material";

export const PaletteLight = (): Pick<Mui.ThemeOptions, "palette"> => ({
  palette: {
    mode: "light",
    background: {
      default: Mui.colors.grey[100],
    },
    primary: {
      main: Mui.colors.green["A700"],
      contrastText: "#ffffff",
    },
    error: {
      main: Mui.colors.red["A400"],
    },
    success: {
      main: Mui.colors.green["A400"],
    },
  },
});

export const PaletteDark = (): Pick<Mui.ThemeOptions, "palette"> => ({
  palette: {
    mode: "dark",
    background: {
      default: Mui.colors.purple["A700"],
      paper: "#00000070",
    },
    primary: {
      main: Mui.colors.teal["500"],
      contrastText: "#ffffff",
    },
    error: {
      main: Mui.colors.red["A400"],
    },
    success: {
      main: Mui.colors.green["A400"],
    },
  },
});
