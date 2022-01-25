import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Pages from "src/app/pages";
import * as Assets from "src/assets";

export const FeedCard = ({ variant }: card.Props) => {
  const isMobile = Mui.useMediaQuery(Mui.useTheme().breakpoints.down("sm"));
  return (
    <Mui.Card sx={{ maxHeight: { md: 450 }, maxWidth: "md" }}>
      <Mui.Grid container>
        <Mui.Grid item xs={12} sm={6} sx={{ position: "relative" }}>
          <Mui.CardMedia component="img" src={Assets.CatImage} />
          <Pages.Feeds.Views.FeedItems />
        </Mui.Grid>
        <Mui.CardContent component={Mui.Grid} item xs={12} sm={6}>
          <Mui.Stack spacing={isMobile ? 1 : 2}>
            <Mui.Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Mui.Typography variant="h6">Main Title</Mui.Typography>
              {
                {
                  duty: <MuiIcons.Work color="primary" />,
                  skill: <MuiIcons.Build color="primary" />,
                }[variant]
              }
            </Mui.Stack>
            <Mui.Divider />
            <Mui.Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Mui.Typography variant="subtitle1" color="text.secondary">
                Categeory
              </Mui.Typography>
              <Mui.Typography variant="caption" color="text.secondary">
                {new Date().toLocaleString()}
              </Mui.Typography>
            </Mui.Stack>

            <Mui.Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis ipsa possimus veniam saepe nesciunt quaerat accusamus
              eligendi sint explicabo quo.
            </Mui.Typography>
            {
              {
                duty: (
                  <Pages.Feeds.Duty.Views.DutyPanel
                    name="Siva"
                    amountRange="$100 - 200"
                    timeRange="10am - 7pm"
                    address="Some address"
                  />
                ),
                skill: null,
              }[variant]
            }
          </Mui.Stack>
        </Mui.CardContent>
      </Mui.Grid>
    </Mui.Card>
  );
};

export declare namespace card {
  export interface Props {
    variant: "duty" | "skill";
  }
}
