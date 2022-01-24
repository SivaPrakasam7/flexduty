import * as Mui from "@mui/material";
import * as Router from "react-router-dom";

export const Main = () => (
  <Mui.Box
    component={Mui.Stack}
    alignItems="center"
    justifyContent="start"
    sx={{ height: "100vh", width: "100%", mt: 10 }}
  >
    <Mui.Chip
      label="FlexDuty"
      color="primary"
      component={Router.Link}
      to="/"
      sx={{
        fontWeight: "bolder",
        cursor: "pointer",
        position: "fixed",
        top: 20,
        right: 10,
      }}
    />
    <Mui.Paper component={Mui.Container} maxWidth="xs">
      <Router.Outlet />
    </Mui.Paper>
  </Mui.Box>
);
