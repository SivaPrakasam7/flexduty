import * as Mui from "@mui/material";

export const Banner = () => (
  <Mui.Stack
    alignItems="center"
    justifyContent="center"
    sx={{ height: "80vh" }}
  >
    <Mui.Typography variant="h4">Flexible-Time-Duty</Mui.Typography>
    <Mui.Typography variant="h6" maxWidth="sm">
      Explore all kind of jobs for all kind of people. People make our own
      destiny. People can share our skills in this platform.
    </Mui.Typography>
  </Mui.Stack>
);
