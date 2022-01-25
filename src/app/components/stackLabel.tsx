import * as Mui from "@mui/material";
import * as React from "react";

export const StackLabel = ({ title, value, medium }: stackLabel.Props) => (
  <Mui.Stack spacing={0}>
    <Mui.Typography
      variant={medium ? "body1" : "caption"}
      color="text.secondary"
    >
      {title}
    </Mui.Typography>
    <Mui.Typography variant={medium ? "h6" : "body1"}>{value}</Mui.Typography>
  </Mui.Stack>
);

export declare namespace stackLabel {
  export interface Props {
    title: string;
    value?: string | React.ReactNode;
    medium?: boolean;
  }
}
