import * as React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Formik from "formik";
import * as FormikMui from "formik-mui";
import * as Components from "src/app/components";

export const FormField = (props: Mui.TextFieldProps) => (
  <Formik.Field
    component={props.type === "password" ? MuiPasswordField : MuiTextField}
    {...props}
  />
);

export const MuiTextField = ({ label, ...props }: FormikMui.TextFieldProps) => {
  const {
    form: { touched, errors },
    field: { name },
  } = props;
  return (
    <Components.Fields.FormLabel
      label={label}
      color={Boolean(touched[name] && errors[name]) ? "error" : undefined}
    >
      <Mui.TextField
        variant="outlined"
        fullWidth
        {...FormikMui.fieldToTextField(props)}
      />
    </Components.Fields.FormLabel>
  );
};

export const MuiPasswordField = ({
  label,
  type,
  ...props
}: FormikMui.TextFieldProps) => {
  const [visible, setVisible] = React.useState(false);
  const handleClick = () => setVisible(!visible);
  const {
    form: { touched, errors },
    field: { name },
  } = props;
  return (
    <Components.Fields.FormLabel
      label={label}
      color={Boolean(touched[name] && errors[name]) ? "error" : undefined}
    >
      <Mui.TextField
        variant="outlined"
        fullWidth
        {...FormikMui.fieldToTextField(props)}
        type={visible ? "text" : type}
        InputProps={{
          endAdornment: (
            <Mui.InputAdornment position="end">
              <Mui.IconButton onClick={handleClick}>
                {visible ? (
                  <MuiIcons.VisibilityOff fontSize="inherit" />
                ) : (
                  <MuiIcons.Visibility fontSize="inherit" />
                )}
              </Mui.IconButton>
            </Mui.InputAdornment>
          ),
        }}
      />
    </Components.Fields.FormLabel>
  );
};
