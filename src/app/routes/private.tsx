import * as Router from "react-router-dom";
import * as ReactFire from "reactfire";
import * as Components from "src/app/components";

export const Private = ({ protect = false, children }: route.Props) => {
  const auth = ReactFire.useSigninCheck();

  if (auth.status === "loading") return <Components.SpalshScreen />;

  return (auth.data.signedIn && protect) ||
    (!auth.data.signedIn && !protect) ? (
    <>{children}</>
  ) : (
    <Router.Navigate to="/" />
  );
};

export declare namespace route {
  export type Props = Child & Private;
  export interface Private {
    protect?: boolean;
  }
}
