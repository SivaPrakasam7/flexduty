import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Formik from "formik";
import * as React from "react";
import * as Components from "src/app/components";

export const RatingButton = ({
  name,
  label,
}: {
  name: string;
  label?: React.ReactNode;
}) => {
  const { values, touched, errors, setFieldValue } =
    Formik.useFormikContext<{ [key: string]: number }>();
  const handleClick = (index: number) => setFieldValue(name, index);
  return (
    <Components.Fields.FormLabel
      label={label}
      color={Boolean(touched[name] && errors[name]) ? "error" : undefined}
    >
      <Mui.Stack direction="row" spacing={0}>
        {new Array(5).fill(undefined).map((_val, index) => (
          <Mui.IconButton
            size="small"
            key={index}
            color={values[name] > index ? "primary" : undefined}
            onClick={() => handleClick(index + 1)}
          >
            <MuiIcons.HandymanRounded />
          </Mui.IconButton>
        ))}
      </Mui.Stack>
    </Components.Fields.FormLabel>
  );
};
