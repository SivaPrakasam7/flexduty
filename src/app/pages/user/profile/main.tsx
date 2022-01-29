import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Main = () => (
  <Mui.Grid container spacing={2}>
    <Mui.Grid item xs={12}>
      <Pages.User.Profile.Views.Content />
    </Mui.Grid>
    <Mui.Grid item xs={12} md={6}>
      <Pages.User.Profile.Views.BookMarks />
    </Mui.Grid>
    <Mui.Grid item xs={12} md={6}>
      <Pages.User.Profile.Views.Followed />
    </Mui.Grid>
    <Mui.Grid item xs={12} md={6}>
      <Pages.User.Profile.Views.Liked />
    </Mui.Grid>
    <Mui.Grid item xs={12} md={6}>
      <Pages.User.Profile.Views.SkillPost />
    </Mui.Grid>
    <Mui.Grid item xs={12} md={6}>
      <Pages.User.Profile.Views.DutyPost />
    </Mui.Grid>
    <Router.Outlet />
  </Mui.Grid>
);
