import * as Formik from "formik";
import * as Yup from "yup";
import * as Pages from "src/app/pages";

const ForgetValidate = Yup.object().shape({
  email: Yup.string().required("No email provided").email("Invalid email"),
});

export const Main = () => {
  const Submit = (
    values: Pick<Pages.Account.SignIn.signin.Form, "email">,
    {
      setSubmitting,
      resetForm,
    }: Formik.FormikHelpers<Pick<Pages.Account.SignIn.signin.Form, "email">>
  ) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik.Formik
      initialValues={{ email: "" }}
      validationSchema={ForgetValidate}
      onSubmit={Submit}
    >
      {() => (
        <Formik.Form>
          <Pages.Account.Forget.Views.Content />
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};
