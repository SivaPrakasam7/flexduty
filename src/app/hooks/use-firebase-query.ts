import * as FirebaseFirestore from "firebase/firestore";
import * as ReactFire from "reactfire";

export const useFireQuery = <T>(collectionName: string, id?: string) => {
  const firestore = ReactFire.useFirestore();
  const dutyQuery = FirebaseFirestore.query<T>(
    FirebaseFirestore.collectionGroup(
      firestore,
      collectionName
    ) as FirebaseFirestore.CollectionReference<T>
  );
  const { status, data } = ReactFire.useFirestoreCollectionData<T>(dutyQuery, {
    idField: id || "id",
  });
  return { status, data };
};
