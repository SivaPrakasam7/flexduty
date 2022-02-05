import * as Formik from "formik";
import * as Yup from "yup";
import * as React from "react";
import * as NotiStack from "notistack";
import * as ReactFire from "reactfire";
import * as FirebaseAuth from "firebase/auth";
import * as FirebaseFirestore from "firebase/firestore";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";
import * as Providers from "src/app/providers";

const RegisterValidate = Yup.object().shape({
  firstName: Yup.string().required("No First Aame provided").trim(),
  lastName: Yup.string().required("No Last Name provided").trim(),
  email: Yup.string().required("No Email provided").email(),
  contact: Yup.string().required("No Contact provided"),
  password: Yup.string().required("No Password provided").min(8),
});

export const Main = () => {
  const [open, close] = React.useState(false);
  const secondaryAuth = FirebaseAuth.getAuth(Providers.SecondaryFirebaseApp);
  const firestore = ReactFire.useFirestore();
  const GetImageUrl = Hooks.useImageUrl;
  const { enqueueSnackbar } = NotiStack.useSnackbar();

  const handleDialog = () => close(!open);

  const handleSubmit = async (
    { password, profile, ...values }: register.Form,
    { setSubmitting }: Formik.FormikHelpers<register.Form>
  ) => {
    try {
      let profileLink;
      const { user } = await FirebaseAuth.createUserWithEmailAndPassword(
        secondaryAuth,
        values.email,
        password
      );
      if (profile) {
        profileLink = await GetImageUrl(profile[0], user?.uid);
      }
      console.log(profileLink);
      await FirebaseAuth.sendEmailVerification(user);
      await FirebaseAuth.updateProfile(user, {
        displayName: `${values.firstName} ${values.lastName}`,
        photoURL: profileLink,
      });

      const userDoc = FirebaseFirestore.doc(firestore, `users/${user?.uid}`);
      await FirebaseFirestore.setDoc(userDoc, { ...values });
      handleDialog();
    } catch (e) {
      console.log(e);
      enqueueSnackbar("Email already in use", {
        variant: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik.Formik
      initialValues={{
        profile: "",
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        password: "",
      }}
      validationSchema={RegisterValidate}
      onSubmit={handleSubmit}
    >
      {() => (
        <Formik.Form>
          <Pages.Account.Register.Views.Content />
          {open && (
            <Pages.Account.Register.Dialogs.MobileVerification
              secondaryAuth={secondaryAuth}
              close={handleDialog}
            />
          )}
        </Formik.Form>
      )}
    </Formik.Formik>
  );
};

export declare namespace register {
  export interface Form {
    profile: string;
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    password: string;
  }
}
