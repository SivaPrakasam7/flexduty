import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";

export const Main = () => (
  <Mui.Stack sx={{ position: "relative" }}>
    <Pages.Feeds.Duty.Views.ToolPanel />
    {new Array(5).fill(undefined).map((val, index) => (
      <Pages.Feeds.Views.FeedCard key={index} variant="duty" />
    ))}
  </Mui.Stack>
);
