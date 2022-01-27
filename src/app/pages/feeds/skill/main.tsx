import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Main = () => (
  <Mui.Stack>
    <Pages.Feeds.Skill.Views.ToolPanel />
    {new Array(5).fill(undefined).map((val, index) => (
      <Pages.Feeds.Views.FeedCard key={index} variant="skill" />
    ))}
    <Router.Outlet />
  </Mui.Stack>
);
