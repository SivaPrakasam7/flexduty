import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";

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
    <Mui.Button
      variant="contained"
      startIcon={<MuiIcons.Add />}
      component={Router.Link}
      to="create"
    >
      Skill
    </Mui.Button>
  </Mui.Stack>
);
