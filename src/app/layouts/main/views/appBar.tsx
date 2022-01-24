import * as Mui from "@mui/material";
import * as ReactFire from "reactfire";
import * as Layouts from "src/app/layouts";

export const AppBar = () => {
  const auth = ReactFire.useSigninCheck();
  return (
    <Mui.AppBar sx={{ bgcolor: "background.default" }}>
      <Mui.Toolbar>
        <Mui.Typography variant="h5" color="primary">
          FlexDuty
        </Mui.Typography>
        <Mui.Box flexGrow={1} />
        {auth?.data?.signedIn ? (
          <Layouts.Main.Views.Profile click/>
        ) : (
          <Layouts.Main.Views.LoginJoin />
        )}
      </Mui.Toolbar>
    </Mui.AppBar>
  );
};
