import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Route = () => (
  <Router.Routes>
    <Router.Route index element={<Pages.User.Profile.Main />} />
  </Router.Routes>
);
