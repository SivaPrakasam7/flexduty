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
        <Mui.Box sx={{ display: { md: "none" } }}>
          <Layouts.Main.Views.SearchField />
        </Mui.Box>
        <Mui.Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {auth?.data?.signedIn ? (
            <>
              <Layouts.Main.Views.SearchField />
              <Layouts.Main.Views.Profile click />
            </>
          ) : (
            <Layouts.Main.Views.LoginJoin />
          )}
          <Layouts.Main.Views.ThemeSwitch />
        </Mui.Stack>
      </Mui.Toolbar>
    </Mui.AppBar>
  );
};
