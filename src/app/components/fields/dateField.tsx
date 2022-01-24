import * as MuiLab from "@mui/lab";
import * as Mui from "@mui/material";
import * as Formik from "formik";
import * as FormikMuiPickers from "formik-material-ui-pickers";
import * as Components from "src/app/components";

export const DateTimePicker = (props: DateTimePicker.Props) => {
  return <Formik.Field component={FormikMuiDateTimePicker} {...props} />;
};

export const FormikMuiDateTimePicker = ({
  helperText,
  label,
  size,
  ...props
}: FormikMuiPickers.DateTimePickerProps) => {
  const {
    form: { errors, touched, setTouched },
    field: { name },
  } = props;
  return (
    <Components.Fields.FormLabel
      label={label}
      color={Boolean(touched[name] && errors[name]) ? "error" : undefined}
    >
      <MuiLab.DateTimePicker
        {...(FormikMuiPickers.fieldToDateTimePicker(
          props
        ) as MuiLab.DateTimePickerProps)}
        renderInput={(props) => (
          <Mui.TextField
            size={size}
            {...props}
            onBlur={() => {
              setTouched({ ...touched, [name]: true });
            }}
            fullWidth
            error={Boolean(touched[name] && errors[name])}
            helperText={touched[name] && errors[name]}
          />
        )}
      />
      {Boolean(touched[name] && errors[name]) && (
        <Mui.Typography color="error" variant="caption">
          {errors[name]}
        </Mui.Typography>
      )}
    </Components.Fields.FormLabel>
  );
};

export declare namespace DateTimePicker {
  export type Props = Required<
    Pick<Mui.TextFieldProps, "name" | "label" | "size">
  > &
    Partial<MuiLab.DateTimePickerProps>;
}
