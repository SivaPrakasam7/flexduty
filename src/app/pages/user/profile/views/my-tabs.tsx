import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as MuiLab from "@mui/lab";
import * as React from "react";
import * as Pages from "src/app/pages";

export const MyTabs = () => {
  const [value, setValue] = React.useState("0");
  const handleChange = (event: React.SyntheticEvent, newValue: string) =>
    setValue(newValue);
  return (
    <Mui.Card>
      <Mui.CardContent>
        <MuiLab.TabContext value={value}>
          <MuiLab.TabList
            onChange={handleChange}
            component={Mui.Box}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              borderBottom: `1px solid ${Mui.colors.grey[100]}`,
              "& .MuiTabs-indicator": {
                borderRadius: 20,
              },
              "& button": {
                textTransform: "capitalize",
                minWidth: 0,
                p: 1,
              },
            }}
          >
            <Mui.Tab label="Bookmarks" value="0" />
            <Mui.Tab label="Liked" value="1" />
            <Mui.Tab label="Skill" value="2" />
            <Mui.Tab label="Duty" value="3" />
          </MuiLab.TabList>
          <Mui.Box sx={{ height: 500, overflowY: "auto" }}>
            <MuiLab.TabPanel value="0">
              <Pages.User.Profile.Views.BookMarks />
            </MuiLab.TabPanel>
            <MuiLab.TabPanel value="1">
              <Pages.User.Profile.Views.Liked />
            </MuiLab.TabPanel>
            <MuiLab.TabPanel value="2">
              <Pages.User.Profile.Views.SkillPost />
            </MuiLab.TabPanel>
            <MuiLab.TabPanel value="3">
              <Pages.User.Profile.Views.DutyPost />
            </MuiLab.TabPanel>
          </Mui.Box>
        </MuiLab.TabContext>
      </Mui.CardContent>
    </Mui.Card>
  );
};
