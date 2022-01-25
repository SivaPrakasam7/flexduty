import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import copy from "copy-to-clipboard";

export const Share = () => {
  const handleClick = () => copy(`${window.location.href}`);
  return (
    <Mui.IconButton onClick={handleClick}>
      <MuiIcons.Share sx={{ color: Mui.colors.blue[900] }} />
    </Mui.IconButton>
  );
};
