import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as React from "react";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";
import * as Assets from "src/assets";

export const FeedCard = ({ variant }: card.Props) => {
  const isMobile = Hooks.useMobile();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Mui.Card sx={{ maxHeight: { md: 400 }, maxWidth: "md" }}>
      <Mui.Grid container maxHeight="inherit">
        <Mui.Grid
          item
          xs={12}
          sm={6}
          sx={{ maxHeight: "inherit" }}
          component={Mui.CardActionArea}
          onClick={handleClick}
        >
          <Mui.Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              display: { xs: show ? "none" : "flex", sm: "none" },
              position: "absolute",
              width: "100%",
              p: 1,
              zIndex: 1,
            }}
          >
            <Mui.Typography variant="h6" color="primary" noWrap>
              Main Title
            </Mui.Typography>
            <Mui.Stack direction="row" spacing={1} justifyContent="center">
              <Mui.Typography variant="caption" color="primary">
                Categeory
              </Mui.Typography>
              {
                {
                  duty: <MuiIcons.Work color="primary" />,
                  skill: <MuiIcons.Build color="primary" />,
                }[variant]
              }
            </Mui.Stack>
          </Mui.Stack>
          <Mui.CardMedia component="img" src={Assets.CatImage} />
          <Pages.Feeds.Views.FeedItems variant={variant} />
        </Mui.Grid>
        <Mui.CardContent
          component={Mui.Grid}
          item
          xs={12}
          sm={6}
          sx={{ display: { xs: show ? "flex" : "none", sm: "flex" } }}
        >
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
            {/* <Mui.Divider /> */}
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
            <Pages.Feeds.Views.MoreInfo
              variant={variant}
              name="Siva"
              amountRange="$100 - 200"
              timeRange="10am - 7pm"
              address="Some address"
            />
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
