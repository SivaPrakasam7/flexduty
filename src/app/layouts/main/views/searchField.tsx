import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";

export const SearchField = () => (
  <Mui.TextField
    variant="outlined"
    size="small"
    placeholder="Search..."
    sx={{
      "& fieldset": {
        bgcolor: `#00000020`,
        borderColor: "transparent",
      },
    }}
    InputProps={{
      endAdornment: (
        <Mui.InputAdornment
          position="end"
          sx={{ zIndex: (theme) => theme.zIndex.appBar + 1 }}
        >
          <MuiIcons.Search color="primary" />
        </Mui.InputAdornment>
      ),
    }}
  />
);
