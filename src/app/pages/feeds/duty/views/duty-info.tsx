import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Components from "src/app/components";

export const DutyInfo = ({
  profile = "",
  name,
  amountRange,
  timeRange,
  address,
}: dutyInfo.Props) => (
  <Mui.Grid container alignItems="center" spacing={1}>
    <Mui.Grid item xs={12} sm={6}>
      <Mui.Stack direction="row" spacing={1} alignItems="center">
        <Mui.Avatar src={profile}>{name[0]}</Mui.Avatar>
        <Mui.Typography variant="body1" color="text.secondary">
          {name}
        </Mui.Typography>
      </Mui.Stack>
    </Mui.Grid>
    <Mui.Grid item xs={12} sm={6}>
      <Mui.Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Mui.IconButton color="primary" title="Review">
          <MuiIcons.RateReview />
        </Mui.IconButton>
        <Mui.IconButton color="primary" title="Request">
          <MuiIcons.RequestPage />
        </Mui.IconButton>
        <Mui.IconButton color="primary" title="Message">
          <MuiIcons.Message />
        </Mui.IconButton>
      </Mui.Stack>
    </Mui.Grid>
    <Mui.Grid item xs={6}>
      <Components.StackLabel title="Salary" value={amountRange} />
    </Mui.Grid>
    <Mui.Grid item xs={6}>
      <Components.StackLabel title="Time" value={timeRange} />
    </Mui.Grid>
    <Mui.Grid item xs={12}>
      <Components.StackLabel title="Address" value={address} />
    </Mui.Grid>
  </Mui.Grid>
);

export declare namespace dutyInfo {
  export interface Props {
    profile?: string;
    name: string;
    amountRange?: string;
    timeRange: string;
    address: string;
  }
}

// SMAPLE <Pages.Feeds.Duty.Views.DutyInfo name="Siva" amountRange="$100 - 200" timeRange="10am - 7pm" address="Some address" />;
