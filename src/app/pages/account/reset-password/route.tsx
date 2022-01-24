import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Route = () => (
  <Router.Routes>
    <Router.Route path="/*" element={<Pages.Account.ResetPassword.Main />}>
      <Router.Route
        path="success"
        element={<Pages.Account.ResetPassword.Dialogs.Success />}
      />
    </Router.Route>
  </Router.Routes>
);
