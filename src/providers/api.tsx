import * as ReactQuery from "react-query";

export const Api = ({ children }: common.Child) => {
  const client = new ReactQuery.QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  return (
    <ReactQuery.QueryClientProvider client={client}>
      {children}
    </ReactQuery.QueryClientProvider>
  );
};
