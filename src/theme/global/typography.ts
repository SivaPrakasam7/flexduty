import * as Mui from "@mui/material";

export const Typography = (): Pick<Mui.ThemeOptions, "typography"> => ({
  typography: {
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 550,
    },
  },
});
