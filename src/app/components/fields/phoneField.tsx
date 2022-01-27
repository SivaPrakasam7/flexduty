import * as Mui from "@mui/material";
import * as React from "react";
import * as Formik from "formik";
import * as Constants from "src/constants";
import * as Components from "src/app/components";
import NumberFormat from "react-number-format";

export const PhoneField = ({ label, ...props }: Mui.TextFieldProps) => {
  const { errors, touched, setFieldValue, getFieldProps, ...formikProps } =
    Formik.useFormikContext<{ [key: string]: string }>();
  const [countryCode, setCountryCode] = React.useState(
    getFieldProps(props.name).value?.slice(0, -10) || "+91"
  );
  const name = props.name as string;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFieldValue(
      props.name as string,
      (countryCode + event.target.value) as string
    );

  return (
    <Components.Fields.FormLabel
      label={label}
      color={Boolean(touched[name] && errors[name]) ? "error" : undefined}
    >
      <Mui.Stack direction="row" spacing={1} alignItems="end">
        <Mui.Select
          error={Boolean(touched[name] && errors[name])}
          name={props.name}
          size={props.size}
          value={countryCode}
          onChange={(event: Mui.SelectChangeEvent) =>
            setCountryCode(event.target.value)
          }
          MenuProps={{
            sx: { maxHeight: 200 },
          }}
        >
          {Constants.COUNTRY_FLAG_CODE.map(({ flag, dial_code }, index) => (
            <Mui.MenuItem
              key={index}
              value={dial_code}
            >{`${flag} ${dial_code}`}</Mui.MenuItem>
          ))}
        </Mui.Select>
        <Mui.TextField
          fullWidth
          {...props}
          {...formikProps}
          error={Boolean(touched[name] && errors[name])}
          InputProps={{
            inputComponent:
              PhoneNumberFormat as React.ElementType<Mui.InputBaseComponentProps>,
          }}
          value={getFieldProps(props.name).value?.replace(countryCode, "")}
          onChange={handleChange}
        />
      </Mui.Stack>
      {Boolean(touched[name] && errors[name]) && (
        <Mui.Typography color="error" variant="caption">
          {errors[name]}
        </Mui.Typography>
      )}
    </Components.Fields.FormLabel>
  );
};

export const PhoneNumberFormat = ({ inputRef, onChange, ...other }: any) => (
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
    format="##### #####"
  />
);
