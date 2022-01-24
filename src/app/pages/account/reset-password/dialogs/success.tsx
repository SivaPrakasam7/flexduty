import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";

export const Success = () => (
  <Components.Dialog icon maxWidth="xs">
    <Mui.Stack component={Mui.DialogContent} alignItems="center">
      <Mui.Typography variant="h5" color="primary">
        Reset Password
      </Mui.Typography>
      <Mui.Typography
        variant="body1"
        textAlign="center"
        sx={{
          p: 2,
          bgcolor: (theme) => `${theme.palette.grey[200]}`,
          borderRadius: 2,
          width: "100%",
        }}
      >
        Password Reset Successfull!
      </Mui.Typography>
      <Mui.Button
        variant="outlined"
        component={Router.Link}
        to="/account/login"
      >
        Login Now
      </Mui.Button>
    </Mui.Stack>
  </Components.Dialog>
);
