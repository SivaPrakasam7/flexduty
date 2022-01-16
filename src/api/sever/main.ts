import * as Axios from "axios";
import * as ReactQuery from "react-query";
import * as Api from "src/api";

const Client = Axios.default.create({
  baseURL: "",
});

export const Request = (options: string, data?: any) =>
  Client({
    ...Api.Server.Routes[options],
    headers: {},
    data,
  }).then((res) => res.data);

export const useRequest =
  () => (queryOption: string[], query: string, data?: any) =>
    ReactQuery.useQuery(queryOption, () => Request(query, data));
