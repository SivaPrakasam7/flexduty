import * as ReactFire from "reactfire";
import * as FirebaseApp from "firebase/app";
import * as FirebaseAuth from "firebase/auth";
import * as Firestore from "firebase/firestore";
import * as FireStorage from "firebase/storage";
import * as Constants from "src/constants";

export const SecondaryFirebaseApp = FirebaseApp.initializeApp(
  Constants.FirebaseConfig
);

const SubProvider = ({ children }: Child) => {
  const app = ReactFire.useFirebaseApp();
  const auth = FirebaseAuth.getAuth(app);
  const firestore = Firestore.getFirestore(app);
  const stoarge = FireStorage.getStorage(app);
  return (
    <ReactFire.AuthProvider sdk={auth}>
      <ReactFire.FirestoreProvider sdk={firestore}>
        <ReactFire.StorageProvider sdk={stoarge}>
          {children}
        </ReactFire.StorageProvider>
      </ReactFire.FirestoreProvider>
    </ReactFire.AuthProvider>
  );
};

export const FirebaseProvider = ({ children }: Child) => (
  <ReactFire.FirebaseAppProvider firebaseConfig={Constants.FirebaseConfig}>
    <SubProvider>{children}</SubProvider>
  </ReactFire.FirebaseAppProvider>
);
