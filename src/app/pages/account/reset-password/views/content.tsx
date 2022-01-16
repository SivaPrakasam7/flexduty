import * as Mui from "@mui/material";
import * as Components from "src/app/components";

export const Content = () => (
  <Mui.CardContent component={Mui.Stack} alignItems="center" spacing={3}>
    <Mui.Typography variant="h5">Sign In</Mui.Typography>
    <Mui.Typography variant="subtitle1" color="text.secondary">
      Please sign in to see your profile
    </Mui.Typography>
    <Components.FormField
      type="password"
      name="password"
      label="New Password"
      placeholder="Enter your password"
    />
    <Components.FormField
      type="password"
      name="confirmPassword"
      label="Confirm Password"
      placeholder="Enter your password"
    />
    <Components.FormButton>Change Password</Components.FormButton>
  </Mui.CardContent>
);
