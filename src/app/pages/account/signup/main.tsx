import * as Formik from "formik";
import * as Yup from "yup";
import * as Pages from "src/app/pages";

const SignUpValidate = Yup.object().shape({
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
    values: signup.Form,
    { setSubmitting, resetForm }: Formik.FormikHelpers<signup.Form>
  ) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik.Formik
      initialValues={{
        profile: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={SignUpValidate}
      onSubmit={Submit}
    >
      {() => (
        <Formik.Form>
          <Pages.Account.SignUp.Views.Content />
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};

export declare namespace signup {
  export interface Form {
    profile: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
}
