import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as ReactFire from "reactfire";

export const Logout = () => {
  const auth = ReactFire.useAuth();
  const handleLogout = () => auth.signOut();

  return (
    <Mui.MenuItem
      onClick={handleLogout}
      sx={{ display: auth?.currentUser ? "flex" : "none" }}
    >
      <Mui.ListItemIcon>
        <MuiIcons.Logout fontSize="small" sx={{ color: "error.main" }} />
      </Mui.ListItemIcon>
      <Mui.Typography variant="body1" color="error">
        Logout
      </Mui.Typography>
    </Mui.MenuItem>
  );
};
