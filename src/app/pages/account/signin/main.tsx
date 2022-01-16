import * as Formik from "formik";
import * as Yup from "yup";
import * as Pages from "src/app/pages";

const SignInValidate = Yup.object().shape({
  email: Yup.string().required("No email provided").email("Invalid email"),
  password: Yup.string()
    .required("No password Provided")
    .min(8, "Password should be 8 chars minimum.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

export const Main = () => {
  const Submit = (
    values: signin.Form,
    { setSubmitting, resetForm }: Formik.FormikHelpers<signin.Form>
  ) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik.Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={SignInValidate}
      onSubmit={Submit}
    >
      {() => (
        <Formik.Form>
          <Pages.Account.SignIn.Views.Content />
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};

export declare namespace signin {
  export interface Form {
    email: string;
    password: string;
  }
}
