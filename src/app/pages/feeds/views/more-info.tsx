import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as React from "react";
import * as ReactFire from "reactfire";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";

export const MoreInfo = ({ variant, ...props }: moreInfo.Props) => {
  const auth = ReactFire.useSigninCheck();
  const [open, close] = React.useState(false);
  const handleClick = () => close(!open);
  return (
    <>
      <Mui.CardActionArea sx={{ borderRadius: 1 }}>
        <Mui.Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          onClick={handleClick}
        >
          <Mui.Typography variant="h6" color="inherit">
            More Info
          </Mui.Typography>
          {open ? (
            <MuiIcons.ExpandLess />
          ) : (
            <MuiIcons.ExpandMore color="inherit" />
          )}
        </Mui.Stack>
      </Mui.CardActionArea>
      <Mui.Collapse in={open}>
        {auth?.data?.signedIn ? (
          {
            duty: (
              <Pages.Feeds.Duty.Views.DutyInfo
                {...(props as Pages.Feeds.Duty.Views.dutyInfo.Props)}
              />
            ),
            skill: (
              <Pages.Feeds.Skill.Views.SkillInfo
                {...(props as Pages.Feeds.Skill.Views.skillInfo.Props)}
              />
            ),
          }[variant]
        ) : (
          <Components.SignInBlocker sx={{ height: 150 }} />
        )}
      </Mui.Collapse>
      <Mui.Collapse in={!open}>
        <Pages.Feeds.Views.RatingInfo variant={variant} />
      </Mui.Collapse>
    </>
  );
};

export declare namespace moreInfo {
  export type Props = (
    | Pages.Feeds.Duty.Views.dutyInfo.Props
    | Pages.Feeds.Skill.Views.skillInfo.Props
  ) &
    variant;
}
