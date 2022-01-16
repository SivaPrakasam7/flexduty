import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";
import * as Pages from "src/app/pages";

export const Main = () => (
  <Router.Routes>
    <Router.Route path="/" element={<Layouts.Smaple />}>
      <Router.Route index element={<Pages.Smaple />} />
    </Router.Route>
  </Router.Routes>
);
