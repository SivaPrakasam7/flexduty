import * as Themes from "src/theme";

export const Main = () => ({
  ...Themes.Global.Components(),
  ...Themes.Global.Palette(),
  ...Themes.Global.Typography(),
});
