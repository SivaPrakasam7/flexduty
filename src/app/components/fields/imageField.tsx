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
  label,
  hide,
  multiple,
  height,
  width,
}: image.Props & Mui.CardMediaProps) => {
  const { setFieldValue, values, errors, touched, isSubmitting } =
    Formik.useFormikContext<{ [key: string]: string[] }>();
  const handleOnChange = async (e: React.FormEvent<HTMLInputElement>) =>
    setFieldValue(
      name,
      await Promise.all(
        [...(e.target as unknown as { files: Blob[] })?.files]?.map((file) =>
          toBase64(file)
        )
      )
    );
  let widthAlign = { 1: 1, 2: 1, 3: 2, 4: 2 }?.[
    values[name]?.length > 4 ? 4 : values[name]?.length
  ];
  let heightAlign = { 1: 1, 2: 2, 3: 2, 4: 2 }?.[
    values[name]?.length > 4 ? 4 : values[name]?.length
  ];
  return (
    <Components.Fields.FormLabel
      label={hide ? undefined : label}
      color={Boolean(touched[name] && errors[name]) ? "error" : undefined}
    >
      <Mui.Box sx={{ width: "100%" }}>
        <input
          disabled={isSubmitting}
          hidden
          multiple={multiple}
          accept="image/*"
          id={`browse${name}`}
          type="file"
          name={name}
          onChange={handleOnChange}
        />
        <label
          htmlFor={`browse${name}`}
          style={{
            display: "inline-block",
            height: height,
            width: width,
            overflow: "hidden",
            borderRadius: 5,
          }}
        >
          {!values[name] ? (
            <Mui.Avatar
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
                heigth: "100%",
                width: "100%",
                minHeight: "100%",
              }}
            >
              {label}
            </Mui.Avatar>
          ) : (
            values[name]?.slice(0, 4).map((src, index) => (
              <Mui.Box sx={{ position: "relative", float: "left" }} key={index}>
                <Mui.Avatar
                  src={src}
                  sx={{
                    cursor: "pointer",
                    textAlign: "center",
                    borderRadius: 0,
                    objectFit: "cover",
                    boxShadow: values[name] && "0px 0px 10px #00000050",
                    width: (width as number) / (widthAlign || 1),
                    height: (height as number) / (heightAlign || 1),
                  }}
                />
                {values[name].length > 4 && index === 3 && (
                  <Mui.Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      position: "absolute",
                      top: 0,
                      bgcolor: "#00000090",
                      color: "#fff",
                      width: (width as number) / (widthAlign || 1),
                      height: (height as number) / (heightAlign || 1),
                    }}
                  >
                    <Mui.Typography variant="body1">{`+${
                      values[name].length - 4
                    } more`}</Mui.Typography>
                  </Mui.Stack>
                )}
              </Mui.Box>
            ))
          )}
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
    multiple?: boolean;
    height: string | number;
    width: string | number;
  }
}
