import * as Formik from "formik";
import * as Yup from "yup";
import * as Axios from "axios";
import * as Router from "react-router-dom";
import * as NotiStack from "notistack";
import * as Pages from "src/app/pages";

const ResetValidate = Yup.object().shape({
  password: Yup.string().required("No Password provided").min(8),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password doesn't match"
  ),
});

export const Main = () => {
  const navigate = Router.useNavigate();
  const { state } = Router.useLocation() as {
    state: { oobCode: string; apiKey: string };
  };
  const { enqueueSnackbar } = NotiStack.useSnackbar();

  const handleSubmit = async (
    values: reset.Form,
    { setSubmitting, resetForm }: Formik.FormikHelpers<reset.Form>
  ) => {
    try {
      await Axios.default.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=${state?.apiKey}`,
        {
          oobCode: state?.oobCode,
          newPassword: values.password,
        }
      );
      navigate("success");
    } catch (e) {
      enqueueSnackbar("Invalid Reset Password Link", { variant: "error" });
    } finally {
      console.log(values);
      resetForm();
      setSubmitting(false);
    }
  };

  return (
    <Formik.Formik
      initialValues={{ password: "", confirmPassword: "" }}
      validationSchema={ResetValidate}
      onSubmit={handleSubmit}
    >
      {() => (
        <Formik.Form>
          <Pages.Account.ResetPassword.Views.Content />
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};

export declare namespace reset {
  export interface Form {
    password: string;
    confirmPassword: string;
  }
}
