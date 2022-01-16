import * as Mui from "@mui/material";
import * as Components from "src/app/components";

export const Content = () => (
  <Mui.CardContent component={Mui.Stack} alignItems="center" spacing={3}>
    <Mui.Typography variant="h5">Forget Password</Mui.Typography>
    <Mui.Typography variant="subtitle1" color="text.secondary">
      Please enter your email to get password reset link
    </Mui.Typography>
    <Components.FormField
      type="text"
      name="email"
      label="Email"
      placeholder="Joe@gmail.com"
    />
    <Components.FormButton>Get Link</Components.FormButton>
  </Mui.CardContent>
);
