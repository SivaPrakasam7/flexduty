import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";

export const Follower = () => (
  <Components.StackLabel
    title="My Followers"
    medium
    value={<Mui.Box sx={{ height: 230, overflowY: "auto" }}></Mui.Box>}
  />
);
