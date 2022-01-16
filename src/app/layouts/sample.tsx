import * as Mui from "@mui/material";
import * as Router from "react-router-dom";

export const Smaple = () => (
  <>
    <Mui.Typography variant="h3">Sample Layout</Mui.Typography>
    <Router.Outlet />
  </>
);
