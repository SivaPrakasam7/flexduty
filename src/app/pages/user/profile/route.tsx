import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Route = () =>
  Router.useRoutes([{ path: "/", element: <Pages.User.Profile.Main /> }]);
