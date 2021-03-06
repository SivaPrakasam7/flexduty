import * as Mui from "@mui/material";
import * as ReactFire from "reactfire";
import * as Pages from "src/app/pages";

export const FeedItems = ({ variant, id }: variant & { id: string }) => {
  const auth = ReactFire.useSigninCheck();
  return (
    <Mui.Stack
      direction="row"
      sx={{ position: "absolute", bottom: 1, right: 1 }}
    >
      <Pages.Feeds.Views.Like disabled={!auth?.data?.signedIn} id={id} />
      {
        {
          duty: (
            <Pages.Feeds.Views.Bookmark
              disabled={!auth?.data?.signedIn}
              id={id}
            />
          ),
          skill: (
            <Pages.Feeds.Views.Follow
              disabled={!auth?.data?.signedIn}
              id={id}
            />
          ),
        }[variant]
      }
      <Pages.Feeds.Views.Share />
    </Mui.Stack>
  );
};
