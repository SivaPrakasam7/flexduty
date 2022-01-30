import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Assets from "src/assets";

export const InfoCard = ({ variant, myVariant }: variant & myVariant) => (
  <Mui.Card
    sx={{ height: { sm: 130 }, m: 1, position: "relative" }}
    component={Mui.Stack}
    direction={{ xs: "column", sm: "row" }}
  >
    <Mui.CardMedia
      component="img"
      src={Assets.CatImage}
      sx={{ maxWidth: { sm: 130 }, minWidth: 0 }}
    />
    <Mui.CardContent sx={{ p: 1, width: "100%" }}>
      <Mui.Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Mui.Typography variant="h6" noWrap>
          Main Title
        </Mui.Typography>
        <Mui.Stack direction="row" spacing={1} justifyContent="center">
          <Mui.Typography variant="caption" color="text.secondary">
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
      <Mui.Typography variant="body2" noWrap>
        Some content
      </Mui.Typography>
      <Mui.Typography variant="caption" color="text.secondary">
        {new Date().toLocaleString()}
      </Mui.Typography>
      <Mui.Box
        sx={{
          position: "absolute",
          right: 5,
          bottom: { xs: "auto", sm: 5 },
          top: { xs: 5, sm: "auto" },
        }}
      >
        {
          {
            duty: (
              <Mui.IconButton size="small" sx={{ color: Mui.colors.blue[900] }}>
                <MuiIcons.Edit />
              </Mui.IconButton>
            ),
            skill: (
              <Mui.IconButton size="small" sx={{ color: Mui.colors.blue[900] }}>
                <MuiIcons.Edit />
              </Mui.IconButton>
            ),
            like: (
              <Mui.IconButton size="small">
                <MuiIcons.Favorite color="error" />
              </Mui.IconButton>
            ),
            bookmark: (
              <Mui.IconButton size="small" sx={{ color: Mui.colors.blue[900] }}>
                <MuiIcons.Bookmark />
              </Mui.IconButton>
            ),
          }[myVariant]
        }
      </Mui.Box>
    </Mui.CardContent>
  </Mui.Card>
);
