import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as React from "react";
import * as Components from "src/app/components";

export const RatingInfo = (props: ratingInfo.Props) => (
  <Mui.Grid container alignItems="center" spacing={2}>
    <Mui.Grid item xs={12} sm={6}>
      <Components.StackLabel
        title="Overall Ratings(356)"
        value={
          <Mui.Stack direction="row" spacing={1}>
            {new Array(5)
              .fill(undefined)
              .map((value, index) =>
                index < 3 ? (
                  <MuiIcons.Star color="primary" key={index} />
                ) : (
                  <MuiIcons.StarBorder color="primary" key={index} />
                )
              )}
          </Mui.Stack>
        }
      />
    </Mui.Grid>
    <Mui.Grid item xs={12} sm={6}>
      <Components.StackLabel
        title="Badge"
        value={<Mui.Chip color="primary" size="small" label="Premium" />}
      />
    </Mui.Grid>
    <Mui.Grid item xs={12} sm={6}>
      <Components.StackLabel title="Attenders" value="57" />
    </Mui.Grid>
    <Mui.Grid item xs={12} sm={6}>
      <Components.StackLabel
        title="Performance(50%)"
        value={
          <Mui.Stack direction="row" spacing={1}>
            <Mui.LinearProgress
              color="primary"
              variant="determinate"
              value={50}
            />
          </Mui.Stack>
        }
      />
    </Mui.Grid>
  </Mui.Grid>
);

export declare namespace ratingInfo {
  export interface Props {}
}

// SMAPLE <Pages.Feeds.Duty.Views.DutyInfo name="Siva" amountRange="$100 - 200" timeRange="10am - 7pm" address="Some address" />;
