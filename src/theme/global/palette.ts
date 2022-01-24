import * as Mui from "@mui/material";

const CommonPalette = {
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
};

export const PaletteLight = (): Pick<Mui.ThemeOptions, "palette"> => ({
  palette: {
    mode: "light",
    background: {
      default: Mui.colors.grey[100],
    },
    ...CommonPalette,
  },
});

export const PaletteDark = (): Pick<Mui.ThemeOptions, "palette"> => ({
  palette: {
    mode: "dark",
    background: {
      default: Mui.colors.indigo["900"],
      paper: "#ffffff00",
    },
    ...CommonPalette,
  },
});
