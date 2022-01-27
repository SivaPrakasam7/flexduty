import * as Mui from "@mui/material";
import type * as Pages from "src/app/pages";
import * as Components from "src/app/components";

export const Content = ({
  variant,
}: Pages.Feeds.Duty.Dialogs.CreateEdit.createEdit.Props) => (
  <>
    <Mui.Grid container component={Mui.DialogContent} spacing={1}>
      <Mui.Grid item xs={12} md={6}>
        <Components.Fields.ImageSelector
          hide
          label="Upload Image"
          name="images"
          sx={{ minWidth: "100%", width: 250, height: 150 }}
        />
      </Mui.Grid>
      <Mui.Grid item xs={12} md={6} container spacing={1}>
        <Mui.Grid item xs={12}>
          <Components.Fields.FormField
            size="small"
            name="title"
            label="Title"
          />
        </Mui.Grid>
        <Mui.Grid item xs={12}>
          <Components.Fields.SelectFormField
            size="small"
            name="categeory"
            label="Categeory"
            options={["computer", "mechanical"]}
          />
        </Mui.Grid>
      </Mui.Grid>
      <Mui.Grid item xs={12}>
        <Components.Fields.FormField
          size="small"
          name="description"
          label="Description"
        />
      </Mui.Grid>
      <Mui.Grid item xs={12} md={6}>
        <Components.Fields.FormAmountField
          size="small"
          name="salaryFrom"
          label="Salary Range From"
        />
      </Mui.Grid>
      <Mui.Grid item xs={12} md={6}>
        <Components.Fields.FormAmountField
          size="small"
          name="salaryTo"
          label="Salary Range To"
        />
      </Mui.Grid>
      <Mui.Grid item xs={12} md={6}>
        <Components.Fields.DateTimePicker
          size="small"
          name="startAt"
          label="Start at"
        />
      </Mui.Grid>
      <Mui.Grid item xs={12} md={6}>
        <Components.Fields.DateTimePicker
          size="small"
          name="endAt"
          label="End at"
        />
      </Mui.Grid>
      <Mui.Grid item xs={12}>
        <Components.Fields.FormField
          size="small"
          name="address"
          label="Address"
        />
      </Mui.Grid>
    </Mui.Grid>
    <Mui.Stack component={Mui.DialogActions} justifyContent="center">
      <Components.SubmitButton sx={{ maxWidth: 200 }}>
        {variant === "create" ? "Create" : "Update"}
      </Components.SubmitButton>
    </Mui.Stack>
  </>
);
