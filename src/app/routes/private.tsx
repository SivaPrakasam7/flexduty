import * as Router from "react-router-dom";
import * as ReactFire from "reactfire";
import * as Components from "src/app/components";

export const Route = ({ protect = false, ...props }: route.Props) => {
  const auth = ReactFire.useSigninCheck();

  if (auth.status === "loading") return <Components.SpalshScreen />;

  if ((auth.data.signedIn && protect) || (!auth.data.signedIn && !protect))
    return <Router.Route {...props} />;

  return <Router.Navigate to="/" />;
};

export declare namespace route {
  export type Props = Router.RouteProps & Private;
  export interface Private {
    protect?: boolean;
  }
}
