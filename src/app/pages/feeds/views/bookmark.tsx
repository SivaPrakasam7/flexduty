import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as React from "react";

export const Bookmark = ({
  disabled,
}: Pick<Mui.IconButtonProps, "disabled">) => {
  const [mark, setMark] = React.useState(false);
  const handleClick = () => setMark(!mark);

  return (
    <Mui.IconButton onClick={handleClick} disabled={disabled}>
      {mark ? (
        <MuiIcons.Bookmark sx={{ color: Mui.colors.blue[900] }} />
      ) : (
        <MuiIcons.BookmarkBorder sx={{ color: Mui.colors.blue[900] }} />
      )}
    </Mui.IconButton>
  );
};
