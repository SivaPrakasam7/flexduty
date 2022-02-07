import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as React from "react";
import * as FirebaseFirestore from "firebase/firestore";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";

export const FeedCard = ({
  id,
  variant,
  title,
  categeory,
  images,
  createdAt,
  description,
  name,
  profile,
  ...props
}: card.Props) => {
  const isMobile = Hooks.useMobile();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Mui.Card sx={{ maxHeight: { sm: 350, md: 400 }, maxWidth: "md" }}>
      <Mui.Grid container maxHeight="inherit">
        <Mui.Grid
          item
          xs={12}
          sm={6}
          sx={{ maxHeight: "inherit" }}
          component={Mui.CardActionArea}
          disableRipple={!isMobile}
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
              {title}
            </Mui.Typography>
            <Mui.Stack direction="row" spacing={1} justifyContent="center">
              <Mui.Typography variant="caption" color="primary">
                {categeory}
              </Mui.Typography>
              {
                {
                  duty: <MuiIcons.Work color="primary" />,
                  skill: <MuiIcons.Build color="primary" />,
                }[variant]
              }
            </Mui.Stack>
          </Mui.Stack>
          {images && (
            <Mui.ImageList
              sx={{
                width: "100%",
                height: { xs: 250, sm: "100%" },
                m: 0,
                scrollbarWidth: "none",
              }}
              variant="quilted"
              rowHeight={400}
              gap={1}
              cols={1}
            >
              {images.map((image, index) => (
                <Mui.ImageListItem key={index}>
                  <Mui.CardMedia component="img" src={image} loading="lazy" />
                </Mui.ImageListItem>
              ))}
            </Mui.ImageList>
          )}
          {/* <Mui.Box
            sx={{
              overflowX: "auto",
              width: "inherit",
              display: "flex",
              height: "100%",
            }}
          >
            {images?.map((image, index) => (
              <Mui.CardMedia
                key={index}
                component="img"
                src={image}
                sx={{ minHeight: { xs: 100, sm: "100%", float: "left" } }}
              />
            ))}
          </Mui.Box> */}
          <Pages.Feeds.Views.FeedItems variant={variant} id={id as string} />
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
              <Mui.Typography variant="h6">{title}</Mui.Typography>
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
                {categeory}
              </Mui.Typography>
              <Mui.Typography variant="caption" color="text.secondary">
                {new Date(
                  (
                    createdAt as unknown as FirebaseFirestore.Timestamp
                  )?.toDate()
                ).toLocaleString()}
              </Mui.Typography>
            </Mui.Stack>
            <Mui.Typography variant="body1">{description}</Mui.Typography>
            <Pages.Feeds.Views.MoreInfo
              profile={profile as string}
              variant={variant}
              name={name as string}
              {...props}
            />
          </Mui.Stack>
        </Mui.CardContent>
      </Mui.Grid>
    </Mui.Card>
  );
};

export declare namespace card {
  export type Props = variant & (User.Duty | User.Skill);
}
