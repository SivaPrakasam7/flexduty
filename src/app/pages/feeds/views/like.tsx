import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as React from "react";

export const Like = ({
  disabled,
  id,
}: Pick<Mui.IconButtonProps, "disabled"> & { id: string }) => {
  const [like, setLike] = React.useState(false);
  const handleClick = () => setLike(!like);

  return (
    <Mui.Box>
      <Mui.IconButton onClick={handleClick} disabled={disabled}>
        {like ? (
          <MuiIcons.Favorite color="error" />
        ) : (
          <MuiIcons.FavoriteBorder color="error" />
        )}
      </Mui.IconButton>
      <Mui.Typography variant="caption" color={Mui.colors.blue[900]}>
        53
      </Mui.Typography>
    </Mui.Box>
  );
};
