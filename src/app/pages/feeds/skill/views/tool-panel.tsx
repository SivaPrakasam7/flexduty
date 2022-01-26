import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";

export const ToolPanel = () => (
  <Mui.Stack
    component={Mui.CardContent}
    sx={{
      position: "fixed",
      zIndex: 2,
      bottom: 0,
      right: 0,
    }}
  >
    <Mui.Button variant="contained" startIcon={<MuiIcons.Add />}>
      Skill
    </Mui.Button>
  </Mui.Stack>
);
