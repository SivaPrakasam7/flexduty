import * as MuiLab from "@mui/lab";
import * as Formik from "formik";

export const SubmitButton = (props: MuiLab.LoadingButtonProps) => {
  const formikHelpers = Formik.useFormikContext();
  return (
    <MuiLab.LoadingButton
      type="submit"
      fullWidth
      variant="contained"
      loading={formikHelpers.isSubmitting}
      loadingPosition="end"
      sx={{ fontSize: "medium" }}
      {...props}
    />
  );
};
