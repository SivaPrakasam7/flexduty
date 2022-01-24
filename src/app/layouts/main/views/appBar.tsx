import * as Mui from "@mui/material";
import * as ReactFire from "reactfire";
import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";

export const AppBar = () => {
  const auth = ReactFire.useSigninCheck();
  return (
    <Mui.AppBar sx={{ bgcolor: "background.default" }}>
      <Mui.Toolbar component={Mui.Stack} direction="row" spacing={1}>
        <Layouts.Main.Views.MenuButton />
        <Mui.Typography
          component={Router.Link}
          variant="h5"
          color="primary"
          to="/"
          sx={{ textDecoration: "none" }}
        >
          FlexDuty
        </Mui.Typography>
        <Mui.Box flexGrow={1} />
        <Layouts.Main.Views.SearchField />
        <Mui.Box sx={{ display: { xs: "none", md: "block" } }}>
          {auth?.data?.signedIn ? (
            <Layouts.Main.Views.Profile click />
          ) : (
            <Layouts.Main.Views.LoginJoin />
          )}
          <Layouts.Main.Views.ThemeSwitch />
        </Mui.Box>
      </Mui.Toolbar>
    </Mui.AppBar>
  );
};
