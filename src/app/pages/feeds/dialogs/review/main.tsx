import * as Mui from "@mui/material";
import * as Formik from "formik";
import * as Yup from "yup";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";

export const createEditValidate = Yup.object().shape({
  comment: Yup.string().required("No Comment provided").trim(),
});

export const Main = ({ variant }: createEdit.Props) => {
  const Submit = (
    values: createEdit.Form,
    { setSubmitting, resetForm }: Formik.FormikHelpers<createEdit.Form>
  ) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  };
  return (
    <Components.Dialog icon>
      <Mui.DialogTitle>
        <Mui.Typography variant="h6" color="primary">
          {variant === "create" ? "Review" : "Edit Your Review"}
        </Mui.Typography>
      </Mui.DialogTitle>
      <Formik.Formik
        initialValues={{
          comment: "",
          rating: 0,
        }}
        validationSchema={createEditValidate}
        onSubmit={Submit}
      >
        {() => (
          <Mui.Stack component={Formik.Form} sx={{ overflowY: "auto" }}>
            <Pages.Feeds.Dialogs.Review.Views.Content variant={variant} />
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
  export interface Form {
    comment: string;
    rating: number;
  }
}
