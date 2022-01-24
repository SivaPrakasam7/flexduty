import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";

export const Content = () => (
  <Mui.CardContent component={Mui.Stack}>
    <Mui.Typography variant="h4" color="primary">
      Login
    </Mui.Typography>
    <Components.Fields.FormField
      name="email"
      label="Email"
      placeholder="Joe@gmail.com"
      size="small"
    />
    <Components.Fields.FormField
      type="password"
      name="password"
      label="Password"
      placeholder="Enter your password"
      size="small"
    />
    <Mui.Link
      component={Router.Link}
      to="/account/forget-password"
      alignSelf="end"
    >
      Forget Password?
    </Mui.Link>
    <Components.SubmitButton>Login</Components.SubmitButton>
    <Mui.Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      component={Router.Link}
      to="/account/register"
      sx={{ color: "primary.main" }}
    >
      Don't have Account
    </Mui.Stack>
    <Router.Outlet />
  </Mui.CardContent>
);
