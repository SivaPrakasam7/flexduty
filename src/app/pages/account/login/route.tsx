import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Route = () =>
  Router.useRoutes([
    {
      path: "/*",
      element: <Pages.Account.Login.Main />,
      children: [
        {
          path: "warning",
          element: <Pages.Account.Register.Dialogs.Success warning />,
        },
      ],
    },
  ]);
