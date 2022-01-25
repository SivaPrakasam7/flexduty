import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";
import * as Pages from "src/app/pages";
import * as Routes from "src/app/routes";

export const Main = () =>
  Router.useRoutes([
    {
      path: "/*",
      element: <Layouts.Main.Main />,
      children: [
        {
          path: "/*",
          element: <Pages.Home.Main />,
        },
        {
          path: "duty/*",
          element: <Pages.Feeds.Duty.Route />,
        },
        {
          path: "skill/*",
          element: <Pages.Feeds.Skill.Route />,
        },
        {
          path: "/*",
          element: (
            <Routes.Private protect>
              <Router.Outlet />
            </Routes.Private>
          ),
          children: [
            {
              path: "profile/*",
              element: <Pages.User.Profile.Route />,
            },
            {
              path: "settings/*",
              element: <Pages.User.Settings.Route />,
            },
          ],
        },
      ],
    },
    {
      path: "account/*",
      element: (
        <Routes.Private>
          <Layouts.Auth.Main />
        </Routes.Private>
      ),
      children: [
        {
          path: "login/*",
          element: <Pages.Account.Login.Route />,
        },
        {
          path: "register/*",
          element: <Pages.Account.Register.Route />,
        },
        {
          path: "forget-password/*",
          element: <Pages.Account.ForgetPassword.Route />,
        },
        {
          path: "reset-password/*",
          element: <Pages.Account.ResetPassword.Route />,
        },
      ],
    },
  ]);
