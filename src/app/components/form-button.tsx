import * as Formik from "formik";
import * as MuiLab from "@mui/lab";

export const FormButton = (props: MuiLab.LoadingButtonProps) => {
  const { isSubmitting } = Formik.useFormikContext();
  return (
    <MuiLab.LoadingButton
      variant="contained"
      type="submit"
      loading={isSubmitting}
      loadingPosition="end"
      fullWidth
      {...props}
    />
  );
};
