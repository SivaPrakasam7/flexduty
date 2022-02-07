import * as Mui from "@mui/material";
import * as Formik from "formik";
import * as Yup from "yup";
import * as ReactFire from "reactfire";
import * as Notistack from "notistack";
import * as FirebaseFirestore from "firebase/firestore";
import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";
import * as Components from "src/app/components";

export const createEditValidate = Yup.object().shape({
  title: Yup.string().required("No Title provided").trim(),
  categeory: Yup.string().notOneOf(["0"], "No Categeory provided"),
  description: Yup.string().required("No Description provided").trim(),
});

export const Main = ({ variant }: createEdit.Props) => {
  const navigate = Router.useNavigate();
  const firestore = ReactFire.useFirestore();
  const GetImageUrl = Hooks.useImageUrl;
  const { data: user } = ReactFire.useUser();
  const { enqueueSnackbar } = Notistack.useSnackbar();
  const Submit = async (
    { images, ...values }: User.Skill,
    { setSubmitting, resetForm }: Formik.FormikHelpers<User.Skill>
  ) => {
    try {
      let imageLinks;
      if (images) {
        imageLinks = await Promise.all(
          images?.map((image) =>
            GetImageUrl(
              image,
              `${user?.uid}/skill/${new Date().getTime()}skill`
            )
          )
        );
      }
      const skillDoc = FirebaseFirestore.collection(
        firestore,
        `users/${user?.uid}/skill`
      );
      await FirebaseFirestore.addDoc(skillDoc, {
        ...values,
        images: images ? imageLinks : images,
        uid: user?.uid,
        profile: user?.photoURL,
        name: user?.displayName,
        createdAt: new Date(),
      });
      navigate(-1);
    } catch (e: any) {
      console.log(e);
      enqueueSnackbar(e.message, {
        variant: "error",
      });
    } finally {
      console.log(values);
      setSubmitting(false);
      resetForm();
    }
  };
  return (
    <Components.Dialog icon>
      <Mui.DialogTitle>
        <Mui.Typography variant="h6" color="primary">
          {variant === "create" ? "Create New Skill" : "Edit Skill"}
        </Mui.Typography>
      </Mui.DialogTitle>
      <Formik.Formik
        initialValues={{
          images: null,
          title: "",
          categeory: "0",
          description: "",
        }}
        validationSchema={createEditValidate}
        onSubmit={Submit}
      >
        {() => (
          <Mui.Stack component={Formik.Form} sx={{ overflowY: "auto" }}>
            <Pages.Feeds.Skill.Dialogs.CreateEdit.Views.Content
              variant={variant}
            />
          </Mui.Stack>
        )}
      </Formik.Formik>
    </Components.Dialog>
  );
};

export declare namespace createEdit {
  export interface Props {
    variant: "create" | "edit";
  }
}
