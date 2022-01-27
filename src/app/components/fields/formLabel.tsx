import * as React from "react";
import * as Mui from "@mui/material";

export const FormLabel = ({
  children,
  label,
  color,
}: Child & formField.Label) => (
  <Mui.FormControl component={Mui.Stack} spacing={1} sx={{ minWidth: "100%" }}>
    {label && (
      <Mui.Typography component={Mui.FormLabel} color={color}>
        {label}
      </Mui.Typography>
    )}
    {children}
  </Mui.FormControl>
);

export declare namespace formField {
  export interface Label {
    label?: React.ReactNode;
    color?: string;
  }
}
