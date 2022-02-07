import * as FirebaseStorage from "firebase/storage";
// import * as ReactFire from "reactfire";
import * as Providers from "src/app/providers";

export const useImageUrl = async (image: string, uid: string) => {
  // const { data: user } = ReactFire.useUser();
  const secondaryStorage = FirebaseStorage.getStorage(
    Providers.SecondaryFirebaseApp
  );
  const ref = FirebaseStorage.ref(secondaryStorage, uid);
  const result = await FirebaseStorage.uploadString(ref, image, "data_url");
  return await FirebaseStorage.getDownloadURL(result.ref);
};
