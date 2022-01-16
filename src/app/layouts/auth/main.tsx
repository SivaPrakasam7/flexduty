import * as Mui from "@mui/material";
import * as Router from "react-router-dom";

export const Main = () => (
  <Mui.Stack
    alignItems="center"
    justifyContent="center"
    spacing={2}
    sx={{ height: "100vh" }}
  >
    <Mui.Card sx={{ minHeight: 350, maxWidth: 350, width: "100%" }}>
      <Router.Outlet />
    </Mui.Card>
    <Mui.ButtonGroup>
      <Mui.Button component={Router.Link} to="signin">
        SignIn
      </Mui.Button>
      <Mui.Button component={Router.Link} to="signup">
        SignUp
      </Mui.Button>
    </Mui.ButtonGroup>
  </Mui.Stack>
);
