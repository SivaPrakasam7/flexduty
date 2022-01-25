import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as React from "react";
import * as ReactFire from "reactfire";
import * as Pages from "src/app/pages";

export const DutyPanel = (props: dutyPanel.Props) => {
  const auth = ReactFire.useSigninCheck();
  const [open, close] = React.useState(false);
  const handleClick = () => auth?.data?.signedIn && close(!open);
  return (
    <>
      <Mui.Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        onClick={handleClick}
        sx={{ color: auth?.data?.signedIn ? undefined : "text.secondary" }}
      >
        <Mui.Typography variant="h6" color="inherit">
          More Info
        </Mui.Typography>
        {!auth?.data?.signedIn && (
          <Mui.Typography variant="caption" color="inherit">
            Disabled, You need to SignIn
          </Mui.Typography>
        )}
        {open ? (
          <MuiIcons.ExpandLess />
        ) : (
          <MuiIcons.ExpandMore color="inherit" />
        )}
      </Mui.Stack>
      <Mui.Collapse in={open}>
        <Pages.Feeds.Duty.Views.DutyInfo {...props} />
      </Mui.Collapse>
      <Mui.Collapse in={!open}>
        <Pages.Feeds.Views.RatingInfo />
      </Mui.Collapse>
    </>
  );
};

export declare namespace dutyPanel {
  export type Props = Pages.Feeds.Duty.Views.dutyInfo.Props;
}

// SMAPLE <Pages.Feeds.Duty.Views.DutyInfo name="Siva" amountRange="$100 - 200" timeRange="10am - 7pm" address="Some address" />;
