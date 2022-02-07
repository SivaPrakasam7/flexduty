import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import * as FirebaseFirestore from "firebase/firestore";
import * as Components from "src/app/components";

export const DutyInfo = ({
  profile = "",
  name,
  salaryFrom,
  salaryTo,
  startAt,
  endAt,
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
        <Mui.IconButton
          color="primary"
          title="Review"
          component={Router.Link}
          to="review"
        >
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
      <Components.StackLabel
        title="Salary"
        value={`${salaryFrom} - ${salaryTo}`}
      />
    </Mui.Grid>
    <Mui.Grid item xs={6}>
      <Components.StackLabel
        title="Time"
        value={`${new Date(
          (startAt as unknown as FirebaseFirestore.Timestamp)?.toDate()
        ).toLocaleDateString()} - ${new Date(
          (endAt as unknown as FirebaseFirestore.Timestamp)?.toDate()
        ).toLocaleDateString()}`}
      />
    </Mui.Grid>
    <Mui.Grid item xs={12}>
      <Components.StackLabel title="Address" value={address} />
    </Mui.Grid>
  </Mui.Grid>
);

export declare namespace dutyInfo {
  export type Props = Required<
    Pick<
      User.Duty,
      | "profile"
      | "name"
      | "salaryFrom"
      | "salaryTo"
      | "startAt"
      | "endAt"
      | "address"
    >
  >;
}
