import * as React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as ReactFire from "reactfire";
import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";

export const MenuButton = () => {
  const navigate = Router.useNavigate();
  const auth = ReactFire.useSigninCheck();
  const Auth = ReactFire.useAuth();
  const [open, close] = React.useState(false);

  const handleClick = () => close(!open);

  const handleLogout = async () => {
    await Auth.signOut();
    navigate("/");
  };

  return (
    <>
      <Mui.IconButton
        disableRipple
        onClick={handleClick}
        sx={{ ml: -1.5, display: { md: "none" } }}
      >
        <MuiIcons.Menu />
      </Mui.IconButton>
      <Mui.Drawer
        open={open}
        sx={{
          "& .MuiPaper-root": {
            bgcolor: "background.default",
            borderRadius: 0,
          },
        }}
        onClose={handleClick}
      >
        <Mui.Toolbar
          component={Mui.Stack}
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ pl: 1 }}
        >
          {auth?.data?.signedIn ? (
            <>
              <Layouts.Main.Views.Profile />
              <Mui.Typography variant="h6">
                {auth?.data?.user?.displayName}
              </Mui.Typography>
              <Layouts.Main.Views.ThemeSwitch />
            </>
          ) : (
            <Layouts.Main.Views.LoginJoin />
          )}
        </Mui.Toolbar>
        <Mui.Divider />
        {auth?.data?.signedIn ? (
          <Mui.MenuItem onClick={handleLogout}>
            <Mui.ListItemIcon>
              <MuiIcons.Logout fontSize="small" sx={{ color: "error.main" }} />
            </Mui.ListItemIcon>
            <Mui.Typography variant="body2" color="error">
              Logout
            </Mui.Typography>
          </Mui.MenuItem>
        ) : null}
      </Mui.Drawer>
    </>
  );
};
