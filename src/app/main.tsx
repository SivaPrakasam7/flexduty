import * as Provider from "src/providers";
import * as Routes from "src/app/routes";
import * as Router from "react-router-dom";

export const Main = () => (
  <Provider.Main>
    <Router.BrowserRouter>
      <Routes.Main />
    </Router.BrowserRouter>
  </Provider.Main>
);
