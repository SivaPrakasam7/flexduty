import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as ReactFire from "reactfire";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";

export const Main = () => {
  const { data: user } = ReactFire.useUser();
  const { status, data: duty } = Hooks.useFireQuery<User.Duty>("duty");
  return (
    <Mui.Stack sx={{ position: "relative" }}>
      {user?.uid && <Pages.Feeds.Duty.Views.ToolPanel />}
      {duty?.map((value, index) => (
        <Pages.Feeds.Views.FeedCard key={index} variant="duty" {...value} />
      ))}
      <Router.Outlet />
    </Mui.Stack>
  );
};
