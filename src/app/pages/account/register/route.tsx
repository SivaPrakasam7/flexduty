import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Route = () =>
  Router.useRoutes([
    {
      path: "/*",
      element: <Pages.Account.Register.Main />,
      children: [
        {
          path: "verify",
          element: <Pages.Account.Register.Dialogs.MobileVerification />,
        },
        {
          path: "success",
          element: <Pages.Account.Register.Dialogs.Success />,
        },
      ],
    },
  ]);
