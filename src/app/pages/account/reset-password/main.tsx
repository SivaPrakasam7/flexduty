import * as Formik from "formik";
import * as Yup from "yup";
import * as Pages from "src/app/pages";

const ResetValidate = Yup.object().shape({
  password: Yup.string()
    .required("No password Provided")
    .min(8, "Password should be 8 chars minimum.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: Yup.string()
    .required("No password provided.")
    .oneOf([Yup.ref("password"), null], "Password doesn't match"),
});

export const Main = () => {
  const Submit = (
    values: reset.Form,
    { setSubmitting, resetForm }: Formik.FormikHelpers<reset.Form>
  ) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik.Formik
      initialValues={{ password: "", confirmPassword: "" }}
      validationSchema={ResetValidate}
      onSubmit={Submit}
    >
      {() => (
        <Formik.Form>
          <Pages.Account.Reset.Views.Content />
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
