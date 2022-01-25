import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";

export const AppBar = () => (
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
      <Mui.Stack alignItems="center" sx={{ display: { md: "none" } }}>
        <Layouts.Main.Views.SearchField />
      </Mui.Stack>
      <Mui.Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Layouts.Main.Views.Menus />
        <Layouts.Main.Views.SearchField />
        <Layouts.Main.Views.Auth />
        <Layouts.Main.Views.ThemeSwitch />
      </Mui.Stack>
    </Mui.Toolbar>
  </Mui.AppBar>
);
