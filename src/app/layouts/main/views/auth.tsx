import * as ReactFire from "reactfire";
import * as Layouts from "src/app/layouts";

export const Auth = () => {
  const auth = ReactFire.useSigninCheck();
  return auth?.data?.signedIn ? (
    <Layouts.Main.Views.Profile />
  ) : (
    <Layouts.Main.Views.LoginJoin />
  );
};
