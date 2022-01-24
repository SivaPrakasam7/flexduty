import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";

export const Content = () => (
  <Mui.CardContent component={Mui.Stack}>
    <Mui.Typography variant="h4" color="primary">
      Reset Password
    </Mui.Typography>
    <Components.Fields.FormField
      type="password"
      name="password"
      label="New Password"
      placeholder="Enter new password"
      size="small"
    />
    <Components.Fields.FormField
      type="password"
      name="confirmPassword"
      label="Confirm Password"
      placeholder="Re-enter password"
      size="small"
    />
    <Components.SubmitButton>Change Password</Components.SubmitButton>
    <Router.Outlet />
  </Mui.CardContent>
);
