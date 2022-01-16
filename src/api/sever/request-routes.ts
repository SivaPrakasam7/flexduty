import type * as Axios from "axios";

export const Routes: {
  [key: string]: Pick<Axios.AxiosRequestConfig, "method" | "url">;
} = {};
