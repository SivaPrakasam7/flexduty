import * as Mui from "@mui/material";

export const useMobile = () =>
  Mui.useMediaQuery(Mui.useTheme().breakpoints.down("sm"));
