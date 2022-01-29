import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Components from "src/app/components";

export const Liked = () => (
  <Mui.Card>
    <Mui.CardContent>
      <Components.StackLabel title="My Likes" medium value={""} />
    </Mui.CardContent>
  </Mui.Card>
);
