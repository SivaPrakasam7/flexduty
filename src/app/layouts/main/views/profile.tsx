import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as React from "react";
import * as ReactFire from "reactfire";
import * as Router from "react-router-dom";

export const Profile = ({ click }: { click?: boolean }) => {
  const { data: user } = ReactFire.useUser();
  const auth = ReactFire.useAuth();
  const navigate = Router.useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLElement>) =>
    click && setAnchorEl(e.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <>
      <Mui.IconButton onClick={handleClick}>
        <Mui.Avatar src={user?.photoURL || ""}>
          {user?.displayName?.at(0)}
        </Mui.Avatar>
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
          {user?.displayName}
        </Mui.MenuItem>
        <Mui.MenuItem onClick={handleLogout}>
          <Mui.ListItemIcon>
            <MuiIcons.Logout fontSize="small" sx={{ color: "error.main" }} />
          </Mui.ListItemIcon>
          <Mui.Typography variant="body2" color="error">
            Logout
          </Mui.Typography>
        </Mui.MenuItem>
      </Mui.Menu>
    </>
  );
};
