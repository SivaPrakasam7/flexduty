import * as Mui from "@mui/material";
import * as React from "react";
import * as ReactError from "react-error-boundary";

export const ErrorBoundary = ({ children }: Child) => (
  <ReactError.ErrorBoundary FallbackComponent={ErrorHandler}>
    {children}
  </ReactError.ErrorBoundary>
);

export const ErrorHandler = ({
  error,
  resetErrorBoundary,
}: ReactError.FallbackProps) => {
  const [open, close] = React.useState(true);
  const handleClose = () => {
    close(!open);
    resetErrorBoundary();
  };
  return (
    <Mui.Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Mui.Alert severity="error" onClose={handleClose}>
        {error.message}
      </Mui.Alert>
    </Mui.Snackbar>
  );
};
