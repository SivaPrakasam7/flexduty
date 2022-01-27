import * as MuiLab from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

export const DateAdapter = ({ children }: Child) => (
  <MuiLab.LocalizationProvider dateAdapter={AdapterDateFns}>
    {children}
  </MuiLab.LocalizationProvider>
);
