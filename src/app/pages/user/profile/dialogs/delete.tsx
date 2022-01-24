import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";

export const Delete = () => (
  <Components.Dialog icon maxWidth="xs">
    <Mui.Stack component={Mui.DialogContent} alignItems="center">
      <Mui.Typography variant="h5" color="primary">
        Delete Account
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
        UserName
      </Mui.Typography>
      <Mui.Button
        color="error"
        variant="outlined"
        component={Router.Link}
        to="/account/login"
      >
        Delete
      </Mui.Button>
    </Mui.Stack>
  </Components.Dialog>
);
