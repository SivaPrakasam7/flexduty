import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Components from "src/app/components";

export const Followed = () => (
  <Mui.Card>
    <Mui.CardContent>
      <Components.StackLabel title="My Follows" medium value={""} />
    </Mui.CardContent>
  </Mui.Card>
);
