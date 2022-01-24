import * as Mui from "@mui/material";
import * as Router from "react-router-dom";

export const LoginJoin = () => (
  <Mui.Stack direction="row">
    <Mui.Button variant="outlined" component={Router.Link} to="/account/login">
      Login
    </Mui.Button>
    <Mui.Button
      variant="outlined"
      component={Router.Link}
      to="/account/register"
    >
      Join
    </Mui.Button>
  </Mui.Stack>
);
