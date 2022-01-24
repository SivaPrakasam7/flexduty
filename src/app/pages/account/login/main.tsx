import * as Formik from "formik";
import * as Yup from "yup";
import * as React from "react";
import * as Axios from "axios";
import * as Router from "react-router-dom";
import * as ReactFire from "reactfire";
import * as NotiStack from "notistack";
import * as FirebaseAuth from "firebase/auth";
import * as Pages from "src/app/pages";
import * as Providers from "src/app/providers";

const LoginValidate = Yup.object().shape({
  email: Yup.string().required("No Email provided").email(),
  password: Yup.string().required("No Password provided").min(8),
});

export const Main = () => {
  const secondaryAuth = FirebaseAuth.getAuth(Providers.SecondaryFirebaseApp);
  const auth = ReactFire.useAuth();
  const navigate = Router.useNavigate();
  const { enqueueSnackbar } = NotiStack.useSnackbar();
  const urlData = Router.useLocation().search;
  const mode = new URLSearchParams(urlData).get("mode");
  const oobCode = new URLSearchParams(urlData).get("oobCode");
  const apiKey = new URLSearchParams(urlData).get("apiKey");

  React.useEffect(() => {
    if (mode && mode === "resetPassword")
      navigate("/account/reset-password", { state: { apiKey, oobCode } });
  }, []);

  const handleSubmit = async (
    values: login.Form,
    { setSubmitting, resetForm }: Formik.FormikHelpers<login.Form>
  ) => {
    try {
      if (mode && mode === "verifyEmail") {
        await Axios.default
          .post(
            `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${apiKey}`,
            { oobCode }
          )
          .then(() => {
            console.log("Email Verified");
          })
          .catch(() =>
            enqueueSnackbar("Invalid verification link", { variant: "error" })
          );
      }
      const { user } = await FirebaseAuth.signInWithEmailAndPassword(
        secondaryAuth,
        values.email,
        values.password
      );
      if (!user.emailVerified) {
        await FirebaseAuth.sendEmailVerification(user);
        navigate("warning");
        return;
      }
      await secondaryAuth.signOut();
      await FirebaseAuth.signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      navigate("/");
    } catch (e) {
      enqueueSnackbar("Invalid Credential", {
        variant: "error",
      });
    } finally {
      resetForm();
      setSubmitting(false);
    }
  };

  return (
    <Formik.Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginValidate}
      onSubmit={handleSubmit}
    >
      {() => (
        <Formik.Form>
          <Pages.Account.Login.Views.Content />
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};

export declare namespace login {
  export interface Form {
    email: string;
    password: string;
  }
}
