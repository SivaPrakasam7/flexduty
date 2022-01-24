import * as Formik from "formik";
import * as Mui from "@mui/material";
import * as FormikMui from "formik-mui";

export const FormCheckBox = (props: checkBox.Type) => (
  <Formik.Field component={MuiCheckBox} type="checkbox" {...props} />
);

export const MuiCheckBox = ({
  label,
  ...props
}: FormikMui.CheckboxProps & { label: string }) => {
  const {
    form: { touched, errors },
    field: { name },
  } = props;
  return (
    <>
      <Mui.FormControlLabel
        control={<Mui.Checkbox {...FormikMui.fieldToCheckbox(props)} />}
        label={label as string}
      />
      {Boolean(touched[name] && errors[name]) && (
        <Mui.Typography color="error" variant="caption">
          {errors[name]}
        </Mui.Typography>
      )}
    </>
  );
};

export declare namespace checkBox {
  export type Type = Partial<Mui.CheckboxProps> & { label: string };
}
