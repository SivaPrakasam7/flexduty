import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Main = () => (
  <Mui.Grid container spacing={2}>
    <Mui.Grid item xs={12}>
      <Pages.User.Profile.Views.Content />
    </Mui.Grid>
    <Mui.Grid item xs={12} md={6}>
      <Mui.Typography variant="h6">My Activities</Mui.Typography>
      <Pages.User.Profile.Views.MyTabs />
    </Mui.Grid>
    <Mui.Grid item xs={12} md={6}>
      <Mui.Typography variant="h6">My Surrounds</Mui.Typography>
      <Pages.User.Profile.Views.MyFollowTabs />
    </Mui.Grid>
    <Router.Outlet />
  </Mui.Grid>
);
