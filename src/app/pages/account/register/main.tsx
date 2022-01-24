import * as Formik from "formik";
import * as Yup from "yup";
import * as Router from "react-router-dom";
import * as NotiStack from "notistack";
import * as ReactFire from "reactfire";
import * as FirebaseAuth from "firebase/auth";
import * as FirebaseFirestore from "firebase/firestore";
import * as FirebaseStorage from "firebase/storage";
import * as Pages from "src/app/pages";
import * as Providers from "src/app/providers";

const RegisterValidate = Yup.object().shape({
  profile: Yup.string().required("No Profile Uploaded"),
  firstName: Yup.string().required("No First Aame provided").trim(),
  lastName: Yup.string().required("No Last Name provided").trim(),
  email: Yup.string().required("No Email provided").email(),
  contact: Yup.string().required("No Contact provided"),
  password: Yup.string().required("No Password provided").min(8),
});

export const Main = () => {
  const secondaryAuth = FirebaseAuth.getAuth(Providers.SecondaryFirebaseApp);
  const secondaryStorage = FirebaseStorage.getStorage(
    Providers.SecondaryFirebaseApp
  );
  const firestore = ReactFire.useFirestore();
  const navigate = Router.useNavigate();
  const { enqueueSnackbar } = NotiStack.useSnackbar();

  const handleSubmit = async (
    { password, profile, ...values }: register.Form,
    { setSubmitting, resetForm }: Formik.FormikHelpers<register.Form>
  ) => {
    try {
      let profileLink;
      const { user } = await FirebaseAuth.createUserWithEmailAndPassword(
        secondaryAuth,
        values.email,
        password
      );
      if (profile) {
        const ref = FirebaseStorage.ref(secondaryStorage, user.uid);
        const result = await FirebaseStorage.uploadString(
          ref,
          profile,
          "data_url"
        );
        profileLink = await FirebaseStorage.getDownloadURL(result.ref);
      }

      await FirebaseAuth.sendEmailVerification(user);
      await FirebaseAuth.updateProfile(user, {
        displayName: `${values.firstName} ${values.lastName}`,
        photoURL: profileLink,
      });

      const userDoc = FirebaseFirestore.doc(firestore, `users/${user?.uid}`);
      await FirebaseFirestore.setDoc(userDoc, { ...values });
      await secondaryAuth.signOut();
      navigate("success");
    } catch (e) {
      enqueueSnackbar("Email already in use", {
        variant: "error",
      });
    } finally {
      resetForm();
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
