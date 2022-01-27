import * as Mui from "@mui/material";
import * as Formik from "formik";
import * as Yup from "yup";
import * as Pages from "src/app/pages";
import * as Components from "src/app/components";

export const createEditValidate = Yup.object().shape({
  title: Yup.string().required("No Title provided").trim(),
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
          {variant === "create" ? "Create New Duty" : "Edit Duty"}
        </Mui.Typography>
      </Mui.DialogTitle>
      <Formik.Formik
        initialValues={{
          images: "",
          title: "",
          categeory: "0",
          description: "",
          salaryFrom: 0,
          salaryTo: 0,
          startAt: "",
          endAt: "",
          address: "",
        }}
        validationSchema={createEditValidate}
        onSubmit={Submit}
      >
        {() => (
          <Mui.Stack component={Formik.Form} sx={{ overflowY: "auto" }}>
            <Pages.Feeds.Duty.Dialogs.CreateEdit.Views.Content
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
  export interface Form {
    images: string;
    title: string;
    categeory: string;
    description: string;
    salaryFrom: number;
    salaryTo: number;
    startAt: string;
    endAt: string;
    address: string;
  }
}
