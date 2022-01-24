import * as Router from "react-router-dom";
import * as Routes from "src/app/routes";
import * as Providers from "src/app/providers";
import * as Themes from "src/theme";

export const Main = () => (
  <Themes.Main>
    <Providers.FirebaseProvider>
      <Providers.ErrorBoundary>
        <Providers.NotiStackProvider>
          <Router.BrowserRouter>
            <Routes.Main />
          </Router.BrowserRouter>
        </Providers.NotiStackProvider>
      </Providers.ErrorBoundary>
    </Providers.FirebaseProvider>
  </Themes.Main>
);
