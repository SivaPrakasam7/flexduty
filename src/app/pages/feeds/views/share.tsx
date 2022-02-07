import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as React from "react";
import copy from "copy-to-clipboard";

export const Share = () => {
  const [copied, setCopied] = React.useState(false);
  const handleClick = () => {
    copy(`${window.location.href}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Mui.IconButton onClick={handleClick}>
      {copied ? (
        <MuiIcons.CheckCircle color="primary" />
      ) : (
        <MuiIcons.Share sx={{ color: Mui.colors.blue[900] }} />
      )}
    </Mui.IconButton>
  );
};
