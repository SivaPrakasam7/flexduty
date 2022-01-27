import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as React from "react";
import * as ReactFire from "reactfire";
import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";
import * as Hooks from "src/app/hooks";

export const Profile = () => {
  const auth = ReactFire.useAuth();
  const isMobile = Hooks.useMobile();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLElement>) =>
    isMobile || setAnchorEl(e.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Mui.IconButton
        disableRipple
        onClick={handleClick}
        component={isMobile ? Router.Link : Mui.IconButton}
        to="profile"
      >
        <Mui.Avatar src={auth?.currentUser?.photoURL || ""}>
          {auth?.currentUser?.displayName?.at(0)}
        </Mui.Avatar>
      </Mui.IconButton>
      <Mui.Typography
        variant="h6"
        sx={{ display: isMobile ? "block" : "none" }}
      >
        {auth?.currentUser?.displayName}
      </Mui.Typography>
      <Mui.IconButton
        size="small"
        component={Router.Link}
        to="settings"
        sx={{ display: { md: "none" } }}
      >
        <MuiIcons.Settings fontSize="inherit" />
      </Mui.IconButton>
      <Mui.Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        PaperProps={{
          elevation: 0,
          sx: {
            bgcolor: "background.default",
            overflow: "visible",
            borderRadius: (theme) => theme.spacing(2),
            marginTop: 1.5,
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.default",
              transform: "translateY(-50%) rotate(45deg)",
            },
          },
        }}
      >
        <Mui.MenuItem component={Router.Link} to="/profile">
          <Mui.ListItemIcon>
            <MuiIcons.Person />
          </Mui.ListItemIcon>
          {auth?.currentUser?.displayName}
        </Mui.MenuItem>
        <Mui.MenuItem component={Router.Link} to="/settings">
          <Mui.ListItemIcon>
            <MuiIcons.Settings />
          </Mui.ListItemIcon>
          Settings
        </Mui.MenuItem>
        <Layouts.Main.Views.Logout />
      </Mui.Menu>
    </>
  );
};
