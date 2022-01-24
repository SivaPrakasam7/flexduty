import * as NotiStack from "notistack";

export const NotiStackProvider = ({ children }: Child) => (
  <NotiStack.SnackbarProvider
    maxSnack={1}
    anchorOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    autoHideDuration={2000}
  >
    {children}
  </NotiStack.SnackbarProvider>
);
