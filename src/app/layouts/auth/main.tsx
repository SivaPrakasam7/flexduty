import * as Mui from "@mui/material";
import * as Router from "react-router-dom";

export const Main = () => (
  <Mui.Box
    component={Mui.Stack}
    alignItems="center"
    justifyContent="start"
    sx={{ height: "100vh", width: "100%", mt: 10 }}
  >
    <Mui.Typography
      component={Router.Link}
      variant="h5"
      color="primary"
      to="/"
      sx={{
        textDecoration: "none",
        position: "fixed",
        top: 10,
        left: 10,
      }}
    >
      FlexDuty
    </Mui.Typography>
    <Mui.Paper component={Mui.Container} maxWidth="xs">
      <Router.Outlet />
    </Mui.Paper>
  </Mui.Box>
);
