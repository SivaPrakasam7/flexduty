import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as React from "react";

export const Follow = ({ disabled }: Pick<Mui.IconButtonProps, "disabled">) => {
  const [follow, setFollow] = React.useState(false);
  const handleClick = () => setFollow(!follow);

  return (
    <Mui.Box>
      <Mui.IconButton onClick={handleClick} disabled={disabled}>
        {follow ? (
          <MuiIcons.Person sx={{ color: Mui.colors.blue[900] }} />
        ) : (
          <MuiIcons.PersonAddOutlined sx={{ color: Mui.colors.blue[900] }} />
        )}
      </Mui.IconButton>
      <Mui.Typography variant="caption">123</Mui.Typography>
    </Mui.Box>
  );
};
