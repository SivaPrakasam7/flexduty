import * as ReactFire from "reactfire";
import * as FirebaseApp from "firebase/app";
import * as FirebaseAuth from "firebase/auth";
import * as FirebaseFireStore from "firebase/firestore";
import * as Constants from "src/constants";

export const secondaryApp = FirebaseApp.initializeApp(
  Constants.FirebaseConfig,
  "FlexDuty"
);

export const Firebase = ({ children }: common.Child) => (
  <ReactFire.FirebaseAppProvider firebaseConfig={Constants.FirebaseConfig}>
    <FirebaseProviders>{children}</FirebaseProviders>
  </ReactFire.FirebaseAppProvider>
);

const FirebaseProviders = ({ children }: common.Child) => {
  const app = ReactFire.useFirebaseApp();
  const auth = FirebaseAuth.getAuth(app);
  const firestore = FirebaseFireStore.getFirestore(app);

  return (
    <ReactFire.AuthProvider sdk={auth}>
      <ReactFire.FirestoreProvider sdk={firestore}>
        {children}
      </ReactFire.FirestoreProvider>
    </ReactFire.AuthProvider>
  );
};
