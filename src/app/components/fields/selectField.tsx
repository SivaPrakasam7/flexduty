import * as Mui from "@mui/material";
import * as Formik from "formik";
import * as FormikMui from "formik-mui";
import * as Components from "src/app/components";

export const SelectFormField = (
  props: Mui.TextFieldProps & selectField.Options
) => <Formik.Field component={MuiSelectField} {...props} />;

export const MuiSelectField = ({
  label,
  options,
  ...props
}: FormikMui.SelectProps & selectField.Options) => {
  const {
    form: { touched, errors },
    field: { name },
  } = props;
  return (
    <Components.Fields.FormLabel
      label={label}
      color={Boolean(touched[name] && errors[name]) ? "error" : undefined}
    >
      <Mui.Select
        variant="outlined"
        fullWidth
        {...FormikMui.fieldToSelect(props)}
      >
        <Mui.MenuItem value="0" disabled>
          <Mui.Typography variant="body1" color="text.secondary">
            Choose
          </Mui.Typography>
        </Mui.MenuItem>
        {options.map((value, index) => (
          <Mui.MenuItem key={index} value={value}>
            {value}
          </Mui.MenuItem>
        ))}
      </Mui.Select>
      {Boolean(touched[name] && errors[name]) && (
        <Mui.Typography color="error" variant="caption">
          {errors[name]}
        </Mui.Typography>
      )}
    </Components.Fields.FormLabel>
  );
};

export declare namespace selectField {
  export interface Options {
    options: string[];
  }
}
