/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_AUTH_DOMAIN: string;
  readonly VITE_PROJECT_ID: string;
  readonly VITE_STORAGE_BUCKET: string;
  readonly VITE_MESSAGING_SENDER_ID: string;
  readonly VITE_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Child {
  children: React.ReactNode;
}

interface variant {
  variant: "duty" | "skill";
}

interface myVariant {
  myVariant: "duty" | "skill" | "bookmark" | "like";
}

declare namespace User {
  export interface main {
    uid: string;
    profile: string;
    firstName: string;
    lastName: string;
    contact: string;
    email: string;
    joined: string;
    badge: "premium" | "good" | "new";
    performance: string;
    ratings: Rating[];
    skill: Skill[];
    duty: Duty[];
  }

  export interface Skill {
    uid: string;
    profile: string;
    name: string;
    images: string[];
    title: string;
    categeory: string;
    description: string;
    likes: Like[];
    followers: Follower[];
    chats: Message[];
  }

  export interface Duty {
    uid?: string;
    profile?: string;
    name?: string;
    images: string[] | null;
    title: string;
    categeory: string;
    description: string;
    salaryFrom: number;
    salaryTo: number;
    startAt: string;
    endAt: string;
    createdAt?: string;
    address: string;
    variant?: "duty" | "skill";
    likes?: Like[];
    bookmarks?: Bookmark[];
    attenders?: Follower[];
    chats?: Message[];
  }

  export interface Rating {
    uid: string;
    profile: string;
    name: string;
    comment: string;
    rating: number;
  }

  export interface Like {
    uid: string;
    profile: string;
    name: string;
    time: string;
  }

  export interface Follower {
    uid: string;
    profile: string;
    name: string;
    time: string;
  }

  export interface Message {
    chatId: string;
    message: string;
    uid: string;
    time: string;
  }

  export interface Bookmark {
    uid: string;
  }
}
