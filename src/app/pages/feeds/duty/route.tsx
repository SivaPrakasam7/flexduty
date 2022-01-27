import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Route = () =>
  Router.useRoutes([
    {
      path: "/",
      element: <Pages.Feeds.Duty.Main />,
      children: [
        {
          path: "create",
          element: (
            <Pages.Feeds.Duty.Dialogs.CreateEdit.Main variant="create" />
          ),
        },
        {
          path: "edit",
          element: <Pages.Feeds.Duty.Dialogs.CreateEdit.Main variant="edit" />,
        },
        {
          path: "review",
          element: <Pages.Feeds.Dialogs.Review.Main variant="create" />,
        },
      ],
    },
  ]);
