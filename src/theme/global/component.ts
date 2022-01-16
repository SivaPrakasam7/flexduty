import * as Mui from "@mui/material";

const borderRadius = 10;

export const Components = (): Pick<Mui.ThemeOptions, "components"> => ({
  components: {
    MuiCard: {
      defaultProps: {
        elevation: 2,
      },
      styleOverrides: {
        root: {
          borderRadius,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 20,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius,
          textTransform: "capitalize",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius,
        },
      },
    },
  },
});
