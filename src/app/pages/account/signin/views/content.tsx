import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";

export const Content = () => (
  <Mui.CardContent component={Mui.Stack} alignItems="center" spacing={3}>
    <Mui.Typography variant="h5">Sign In</Mui.Typography>
    <Mui.Typography variant="subtitle1" color="text.secondary">
      Please sign in to see your profile
    </Mui.Typography>
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
    <Mui.Link
      color="text.secondary"
      component={Router.Link}
      to="../forget-password"
      alignSelf="flex-end"
    >
      Forget password?
    </Mui.Link>
    <Components.FormButton>Login</Components.FormButton>
  </Mui.CardContent>
);
