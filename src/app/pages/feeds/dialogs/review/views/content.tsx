import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import type * as Pages from "src/app/pages";
import * as Components from "src/app/components";

export const Content = ({
  variant,
}: Pages.Feeds.Duty.Dialogs.CreateEdit.createEdit.Props) => {
  const { pathname } = Router.useLocation();
  return (
    <>
      <Mui.Grid container component={Mui.DialogContent} spacing={1}>
        <Mui.Grid item xs={12}>
          <Mui.Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Mui.Typography variant="body1">Title</Mui.Typography>
            <Mui.Stack direction="row" alignItems="center">
              <Mui.Typography variant="caption" color="text.secondary">
                Categeory
              </Mui.Typography>
              {pathname.includes("duty") ? (
                <MuiIcons.Work color="primary" />
              ) : (
                <MuiIcons.Build color="primary" />
              )}
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12}>
          <Components.Fields.FormField
            size="small"
            name="comment"
            label="Comment Here"
            multiline
            rows={4}
          />
        </Mui.Grid>
        <Mui.Grid item xs={12}>
          <Components.Fields.RatingButton
            name="rating"
            label="Give your rating"
          />
        </Mui.Grid>
      </Mui.Grid>
      <Mui.Stack component={Mui.DialogActions} justifyContent="center">
        <Components.SubmitButton sx={{ maxWidth: 200 }}>
          {variant === "create" ? "Post" : "Update"}
        </Components.SubmitButton>
      </Mui.Stack>
    </>
  );
};
