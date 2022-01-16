import * as Theme from "src/theme";
import * as Providers from "src/providers";

export const Main = ({ children }: common.Child) => (
  <Theme.Main>
    <Providers.Error>
      <Providers.Firebase>
        <Providers.Api>{children}</Providers.Api>
      </Providers.Firebase>
    </Providers.Error>
  </Theme.Main>
);
