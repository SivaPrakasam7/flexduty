import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Components from "src/app/components";

export const RatingInfo = ({ variant, ...props }: ratingInfo.Props) => (
  <Mui.Grid container alignItems="center" spacing={2}>
    <Mui.Grid item xs={8}>
      <Components.StackLabel
        title="Overall Ratings(356)"
        value={
          <Mui.Stack direction="row" spacing={1}>
            {new Array(5).fill(undefined).map((_val, index) => (
              <MuiIcons.HandymanRounded
                key={index}
                sx={{
                  color: 3 > index ? "primary.main" : Mui.colors.grey[500],
                }}
              />
            ))}
          </Mui.Stack>
        }
      />
    </Mui.Grid>
    <Mui.Grid item xs={4}>
      <Components.StackLabel
        title="Badge"
        value={<Mui.Chip color="primary" size="small" label="Premium" />}
      />
    </Mui.Grid>
    <Mui.Grid item xs={12} sm={6}>
      <Components.StackLabel
        title={{ duty: "Attenders", skill: "Followers" }[variant]}
        value="57"
      />
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
  export type Props = variant;
}
