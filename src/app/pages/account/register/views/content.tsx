import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";

export const Content = () => (
  <Mui.CardContent component={Mui.Stack}>
    <Mui.Typography variant="h4" color="primary">
      Create New Acount
    </Mui.Typography>
    <Components.Fields.ImageSelector
      name="profile"
      label="Profile"
      hide
      sx={{ minWidth: 100, height: 100 }}
    />
    <Mui.Stack direction="row">
      <Components.Fields.FormField
        name="firstName"
        label="First Name"
        placeholder="Joe"
        size="small"
      />
      <Components.Fields.FormField
        name="lastName"
        label="Last Name"
        placeholder="Garic"
        size="small"
      />
    </Mui.Stack>
    <Components.Fields.FormField
      name="email"
      label="Email"
      placeholder="Joe@gmail.com"
      size="small"
    />
    <Components.Fields.PhoneField
      name="contact"
      label="Contact"
      placeholder="09123 87346"
      size="small"
    />
    <Components.Fields.FormField
      type="password"
      name="password"
      label="Password"
      placeholder="Enter your password"
      size="small"
    />
    <Components.SubmitButton>Register</Components.SubmitButton>
    <Mui.Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      component={Router.Link}
      to="/account/login"
      sx={{ color: "primary.main" }}
    >
      Already have Account
    </Mui.Stack>
    <Router.Outlet />
  </Mui.CardContent>
);
