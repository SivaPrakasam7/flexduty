import * as Formik from "formik";
import * as FormikMui from "formik-mui";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as React from "react";

export const FormField = (props: Partial<Mui.TextFieldProps>) => (
  <Formik.Field
    component={props.type === "password" ? PasswordField : TextField}
    {...props}
  />
);

export const TextField = (props: FormikMui.TextFieldProps) => (
  <Mui.TextField
    variant="outlined"
    fullWidth
    {...FormikMui.fieldToTextField(props)}
  />
);

export const PasswordField = ({ type, ...props }: FormikMui.TextFieldProps) => {
  const [view, setView] = React.useState(false);
  return (
    <Mui.TextField
      variant="outlined"
      fullWidth
      {...FormikMui.fieldToTextField(props)}
      type={view ? "text" : type}
      InputProps={{
        endAdornment: (
          <Mui.IconButton onClick={() => setView(!view)}>
            {view ? <MuiIcons.VisibilityOff /> : <MuiIcons.Visibility />}
          </Mui.IconButton>
        ),
      }}
    />
  );
};
