import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Route = () =>
  Router.useRoutes([
    {
      path: "/*",
      element: <Pages.Account.ResetPassword.Main />,
      children: [
        {
          path: "success",
          element: <Pages.Account.ResetPassword.Dialogs.Success />,
        },
      ],
    },
  ]);
