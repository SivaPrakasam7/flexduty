import * as React from "react";

export const ThemeContext = React.createContext({
  mode: false,
  changeMode: () => {},
});
