import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";

export const Main = () => (
  <Mui.Grid container>
    <Mui.Grid item xs={12}>
      <Pages.Home.Views.Banner />
    </Mui.Grid>
    <Mui.Grid item xs={12} sm={6}></Mui.Grid>
  </Mui.Grid>
);
