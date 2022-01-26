import * as Mui from "@mui/material";
import * as React from "react";
import * as Themes from "src/theme";

export const Main = ({ children }: Child) => {
  const [mode, setMode] = React.useState(
    localStorage.getItem("theme") === "dark"
  );

  const changeMode = () => {
    setMode(!mode);
    localStorage.setItem("theme", mode ? "light" : "dark");
  };

  const theme = React.useMemo(
    () =>
      Mui.createTheme({
        ...Themes.Global.Components(),
        ...(mode ? Themes.Global.PaletteDark() : Themes.Global.PaletteLight()),
        ...Themes.Global.Typography(),
      }),
    [mode]
  );

  return (
    <Themes.Hooks.ThemeContext.Provider value={{ mode, changeMode }}>
      <Mui.ThemeProvider theme={theme}>
        <Themes.CssBaseline.Main />
        {children}
      </Mui.ThemeProvider>
    </Themes.Hooks.ThemeContext.Provider>
  );
};
