import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";

export const Main = () => (
  <Mui.Box>
    <Layouts.Main.Views.AppBar />
    <Mui.Container sx={{ pt: 10 }}>
      <Router.Outlet />
    </Mui.Container>
  </Mui.Box>
);
