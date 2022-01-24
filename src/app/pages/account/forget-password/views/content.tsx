import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";

export const Content = () => (
  <Mui.CardContent component={Mui.Stack}>
    <Mui.Typography variant="h4" color="primary">Forget Password</Mui.Typography>
    <Components.Fields.FormField
      name="email"
      label="Email"
      placeholder="Joe@gmail.com"
      size="small"
    />
    <Components.SubmitButton>Send Link</Components.SubmitButton>
    <Mui.Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      component={Router.Link}
      to="/account/login"
      sx={{ color: "primary.main" }}
    >
      <MuiIcons.ArrowBack fontSize="inherit" /> Go to Login
    </Mui.Stack>
    <Router.Outlet />
  </Mui.CardContent>
);
