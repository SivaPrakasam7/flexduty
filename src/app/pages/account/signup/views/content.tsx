import * as Mui from "@mui/material";
import * as Components from "src/app/components";

export const Content = () => (
  <Mui.CardContent component={Mui.Stack} alignItems="center" spacing={3}>
    <Mui.Typography variant="h5">Sign Up</Mui.Typography>
    <Mui.Typography variant="subtitle1" color="text.secondary">
      Please join with us to enjoy this platform
    </Mui.Typography>
    <Components.FormField
      type="text"
      name="firstName"
      label="First Name"
      placeholder="Jay"
    />
    <Components.FormField
      type="text"
      name="lastName"
      label="Last Name"
      placeholder="Garic"
    />
    <Components.FormField
      type="text"
      name="email"
      label="Email"
      placeholder="Joe@gmail.com"
    />
    <Components.FormField
      type="password"
      name="password"
      label="Password"
      placeholder="Enter your password"
    />
    <Components.FormButton>Create new Account</Components.FormButton>
  </Mui.CardContent>
);
