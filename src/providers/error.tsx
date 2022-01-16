import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as NotiStack from "notistack";
import * as React from "react";

export const Error = ({ children }: common.Child) => {
  const notistackRef = React.createRef<NotiStack.SnackbarProvider>();
  const onClose = (key: React.ReactText) =>
    notistackRef?.current?.closeSnackbar(key);

  return (
    <NotiStack.SnackbarProvider
      ref={notistackRef}
      action={(key) => (
        <Mui.IconButton color="inherit" onClick={() => onClose(key)}>
          <MuiIcons.Close />
        </Mui.IconButton>
      )}
    >
      {children}
    </NotiStack.SnackbarProvider>
  );
};
