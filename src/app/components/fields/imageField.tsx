import * as React from "react";
import * as Mui from "@mui/material";
import * as Formik from "formik";
import * as Components from "src/app/components";

const toBase64 = (file: Blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const ImageSelector = ({
  name,
  sx,
  label,
  hide,
}: image.Props & Mui.CardMediaProps) => {
  const { setFieldValue, values, errors, touched } =
    Formik.useFormikContext<{ [key: string]: string }>();
  const handleOnChange = async (e: React.FormEvent<HTMLInputElement>) =>
    setFieldValue(
      name,
      await toBase64((e.target as unknown as { files: Blob[] })?.files[0])
    );

  return (
    <Components.Fields.FormLabel
      label={hide ? undefined : label}
      color={Boolean(touched[name] && errors[name]) ? "error" : undefined}
    >
      <Mui.Box sx={{ width: "100%" }}>
        <input
          hidden
          accept="image/*"
          id={`browse${name}`}
          type="file"
          name={name}
          onChange={handleOnChange}
        />
        <label
          htmlFor={`browse${name}`}
          style={{ display: "inline-block", width: "fit-content" }}
        >
          <Mui.Avatar
            src={values[name]}
            sx={{
              cursor: "pointer",
              textAlign: "center",
              borderRadius: 2,
              objectFit: "cover",
              boxShadow: values[name] && "0px 0px 10px #00000050",
              border: (theme) =>
                Boolean(touched[name] && errors[name])
                  ? `1px solid ${theme.palette.error.main}`
                  : values[name]
                  ? undefined
                  : `1px solid ${theme.palette.grey[400]}`,
              ...sx,
            }}
          >
            {label}
          </Mui.Avatar>
        </label>
      </Mui.Box>
      {Boolean(touched[name] && errors[name]) && (
        <Mui.Typography color="error" variant="caption">
          {errors[name]}
        </Mui.Typography>
      )}
    </Components.Fields.FormLabel>
  );
};

export declare namespace image {
  export interface Props {
    name: string;
    label?: string;
    hide?: boolean;
  }
}
