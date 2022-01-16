import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";
import * as Pages from "src/app/pages";

export const Main = () => (
  <Router.Routes>
    <Router.Route path="/">
      <Router.Route index />
      <Router.Route path="account" element={<Layouts.Auth.Main />}>
        <Router.Route path="signin" element={<Pages.Account.SignIn.Main />} />
        <Router.Route path="signup" element={<Pages.Account.SignUp.Main />} />
        <Router.Route path="forget-password" element={<Pages.Account.Forget.Main />} />
        <Router.Route path="reset-password" element={<Pages.Account.Reset.Main />} />
      </Router.Route>
    </Router.Route>
  </Router.Routes>
);
