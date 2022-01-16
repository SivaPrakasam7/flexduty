import * as Mui from "@mui/material";
import * as Themes from "src/theme";

export const Main = ({ children }: common.Child) => {
  const theme = Mui.createTheme({ ...Themes.Global.Main() });
  return (
    <Mui.ThemeProvider theme={theme}>
      <Themes.CssBaseline.Main />
      {children}
    </Mui.ThemeProvider>
  );
};
