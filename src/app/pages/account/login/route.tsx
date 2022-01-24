import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Route = () => (
  <Router.Routes>
    <Router.Route path="/*" element={<Pages.Account.Login.Main />}>
      <Router.Route
        path="warning"
        element={<Pages.Account.Register.Dialogs.Success warning />}
      />
    </Router.Route>
  </Router.Routes>
);
