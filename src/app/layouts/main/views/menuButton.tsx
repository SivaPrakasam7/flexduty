import * as React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as ReactFire from "reactfire";
import * as Layouts from "src/app/layouts";

export const MenuButton = () => {
  const { data: user } = ReactFire.useUser();
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
          <Layouts.Main.Views.Profile />
          <Mui.Typography variant="h6">{user?.displayName}</Mui.Typography>
          <Layouts.Main.Views.ThemeSwitch />
        </Mui.Toolbar>
        <Mui.Divider />
      </Mui.Drawer>
    </>
  );
};
