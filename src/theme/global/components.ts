import * as Mui from "@mui/material";

const borderRadius = 8;
const boxShadow = "0px 10px 20px #00000026";

export const Components = (): Pick<Mui.ThemeOptions, "components"> => ({
  components: {
    MuiStack: {
      defaultProps: {
        spacing: 2,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          borderRadius,
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 10,
      },
      styleOverrides: {
        root: {
          boxShadow,
          borderRadius,
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
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});
