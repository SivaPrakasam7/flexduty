import * as Mui from "@mui/material";

export const SignInBlocker = ({ sx, ...props }: Mui.StackProps) => (
  <Mui.Stack
    alignItems="center"
    justifyContent="center"
    sx={{
      bgcolor: "#00000020",
      borderRadius: 1,
      ...sx,
    }}
    {...props}
  >
    <Mui.Typography
      variant="body1"
      color="text.secondary"
      textAlign="center"
      fontWeight="bolder"
    >
      You need to signin to view
    </Mui.Typography>
  </Mui.Stack>
);
