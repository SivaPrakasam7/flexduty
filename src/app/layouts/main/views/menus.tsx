import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Constants from "src/constants";

export const Menus = () => {
  const { pathname } = Router.useLocation();
  return (
    <Mui.Stack direction="row">
      {Constants.MenuItems.map((text, index) => (
        <Mui.Button
          key={index}
          sx={{
            color: pathname.includes(text) ? "primary.main" : "text.secondary",
            fontWeight: "bold",
          }}
          component={Router.Link}
          to={text}
        >
          {text}
        </Mui.Button>
      ))}
    </Mui.Stack>
  );
};
