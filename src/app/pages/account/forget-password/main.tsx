import * as Formik from "formik";
import * as Yup from "yup";
import * as FirebaseAuth from "firebase/auth";
import * as ReactFire from "reactfire";
import * as NotiStack from "notistack";
import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

const ForgetValidate = Yup.object().shape({
  email: Yup.string().required("No Email provided").email(),
});

export const Main = () => {
  const auth = ReactFire.useAuth();
  const navigate = Router.useNavigate();
  const { enqueueSnackbar } = NotiStack.useSnackbar();

  const handleSubmit = async (
    values: Pick<Pages.Account.Login.login.Form, "email">,
    {
      setSubmitting,
      resetForm,
    }: Formik.FormikHelpers<Pick<Pages.Account.Login.login.Form, "email">>
  ) => {
    try {
      await FirebaseAuth.sendPasswordResetEmail(auth, values.email);
      navigate("success");
    } catch (e) {
      enqueueSnackbar("User not found", {
        variant: "error",
      });
    } finally {
      resetForm();
      setSubmitting(false);
    }
  };

  return (
    <Formik.Formik
      initialValues={{ email: "" }}
      validationSchema={ForgetValidate}
      onSubmit={handleSubmit}
    >
      {() => (
        <Formik.Form>
          <Pages.Account.ForgetPassword.Views.Content />
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};
