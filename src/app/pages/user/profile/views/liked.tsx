import * as Pages from "src/app/pages";

export const Liked = () => (
  <>
    <Pages.User.Profile.Views.InfoCard variant="duty" myVariant="like" />
    <Pages.User.Profile.Views.InfoCard variant="skill" myVariant="like" />
    <Pages.User.Profile.Views.InfoCard variant="duty" myVariant="like" />
  </>
);
