import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Route = () => (
  <Router.Routes>
    <Router.Route path="/*" element={<Pages.Account.ForgetPassword.Main />}>
      <Router.Route
        path="success"
        element={<Pages.Account.ForgetPassword.Dialogs.Success />}
      />
    </Router.Route>
  </Router.Routes>
);
