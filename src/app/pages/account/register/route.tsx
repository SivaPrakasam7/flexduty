import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Route = () =>
  Router.useRoutes([
    {
      path: "/*",
      element: <Pages.Account.Register.Main />,
      children: [
        {
          path: "success",
          element: <Pages.Account.Register.Dialogs.Success />,
        },
        {
          path: "partial-success",
          element: <Pages.Account.Register.Dialogs.Success />,
        },
      ],
    },
  ]);
