/// <reference types="vite/client" />

// ENV configurations

interface ImportMetaEnv {
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_PROJECTID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGING_SENDERID: string;
  readonly VITE_FIREBASE_APPID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Common typings
declare namespace common {
  export interface Child {
    children: React.ReactNode;
  }
}
