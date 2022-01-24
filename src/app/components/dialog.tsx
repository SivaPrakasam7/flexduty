import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";

export const Dialog = ({
  sx,
  children,
  icon,
  ...props
}: Partial<Mui.DialogProps> & { icon?: boolean }) => {
  const isMobile = Mui.useMediaQuery(Mui.useTheme().breakpoints.down("md"));
  const navigate = Router.useNavigate();
  const handleClose = () => navigate(-1);
  return (
    <Mui.Dialog
      fullScreen={isMobile}
      fullWidth
      maxWidth="sm"
      onClose={handleClose}
      sx={{
        "& .MuiPaper-root": {
          borderRadius: { xs: props.fullScreen === false ? 5 : 0, md: 5 },
          bgcolor: "background.default",
        },
        "& .MuiButton-root": {
          fontSize: "medium",
        },
        ...sx,
      }}
      open={true}
      {...props}
    >
      {icon && (
        <Mui.Stack direction="row" justifyContent="end" sx={{ mb: -2 }}>
          <Mui.IconButton disableRipple onClick={handleClose}>
            <MuiIcons.Close />
          </Mui.IconButton>
        </Mui.Stack>
      )}
      {children}
    </Mui.Dialog>
  );
};
