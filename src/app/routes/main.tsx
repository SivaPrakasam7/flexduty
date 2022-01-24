import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";
import * as Pages from "src/app/pages";
import * as Routes from "src/app/routes";

export const Main = () => (
  <Router.Routes>
    <Router.Route path="/*">
      <Router.Route path="/*" element={<Layouts.Main.Main />}>
        <Router.Route path="/" element={<Pages.Home.Main />} />
        <Routes.Route protect path="feeds/*" element={<Pages.Feeds.Route />} />
      </Router.Route>
      <Router.Route path="account/*" element={<Layouts.Auth.Main />}>
        <Router.Routes>
          <Router.Route
            path="login/*"
            element={<Pages.Account.Login.Route />}
          />
          <Router.Route
            path="register/*"
            element={<Pages.Account.Register.Route />}
          />
          <Router.Route
            path="forget-password/*"
            element={<Pages.Account.ForgetPassword.Route />}
          />
          <Router.Route
            path="reset-password/*"
            element={<Pages.Account.ResetPassword.Route />}
          />
        </Router.Routes>
      </Router.Route>
    </Router.Route>
  </Router.Routes>
);
