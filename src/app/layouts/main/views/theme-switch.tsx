import * as Mui from "@mui/material";
import * as React from "react";
import * as MuiIcons from "@mui/icons-material";
import * as Themes from "src/theme";

export const ThemeSwitch = () => {
  const { mode, changeMode } = React.useContext(Themes.Hooks.ThemeContext);
  return (
    <Mui.IconButton
      disableRipple
      onClick={changeMode}
      sx={{
        borderRadius: 2,
        bgcolor: mode ? Mui.colors.common.white : Mui.colors.indigo[900],
      }}
    >
      {mode ? (
        <MuiIcons.LightMode color="primary" />
      ) : (
        <MuiIcons.DarkMode color="primary" />
      )}
    </Mui.IconButton>
  );
};
