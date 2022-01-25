import * as React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";
import * as Constants from "src/constants";

export const MenuButton = () => {
  const { pathname } = Router.useLocation();
  const [open, close] = React.useState(false);
  const handleClick = () => close(!open);

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
          <Layouts.Main.Views.Auth />
          <Layouts.Main.Views.ThemeSwitch />
        </Mui.Toolbar>
        <Mui.Divider />
        {Constants.MenuItems.map((text, index) => (
          <Mui.MenuItem key={index} component={Router.Link} to={text}>
            <Mui.Typography
              variant="body1"
              textTransform="capitalize"
              color={pathname.includes(text) ? "primary" : undefined}
            >
              {text}
            </Mui.Typography>
          </Mui.MenuItem>
        ))}
        <Layouts.Main.Views.Logout />
      </Mui.Drawer>
    </>
  );
};
