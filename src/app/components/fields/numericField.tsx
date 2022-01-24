import NumberFormat from "react-number-format";
import * as Mui from "@mui/material";
import * as Formik from "formik";
import * as FormikMui from "formik-mui";
import * as Components from "src/app/components";

export const FormAmountField = (props: Mui.TextFieldProps) => (
  <Formik.Field component={AmountField} {...props} />
);

export const AmountField = ({ label, ...props }: FormikMui.TextFieldProps) => {
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
        inputProps={{
          style: { textAlign: "right" },
        }}
        InputProps={{
          inputComponent: AmountFormatField,
        }}
        {...FormikMui.fieldToTextField(props)}
      />
    </Components.Fields.FormLabel>
  );
};

export const AmountFormatField = ({ inputRef, onChange, ...other }: any) => (
  <NumberFormat
    {...other}
    getInputRef={inputRef}
    onValueChange={(values: any) => {
      onChange({
        target: {
          name: other.name,
          value: values.value,
        },
      });
    }}
    thousandSeparator
  />
);
