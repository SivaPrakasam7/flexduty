import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as ReactFire from "reactfire";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";

export const Main = () => {
  const auth = ReactFire.useSigninCheck();
  const { status, data: skill } = Hooks.useFireQuery<User.Skill>("skill");
  return (
    <Mui.Stack sx={{ position: "relative" }}>
      {auth?.data?.signedIn && <Pages.Feeds.Skill.Views.ToolPanel />}
      {skill?.map((value, index) => (
        <Pages.Feeds.Views.FeedCard key={index} variant="skill" {...value} />
      ))}
      <Router.Outlet />
    </Mui.Stack>
  );
};
