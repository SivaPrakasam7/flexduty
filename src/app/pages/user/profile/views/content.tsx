import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as ReactFire from "reactfire";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";

export const Content = () => {
  const { data: user } = ReactFire.useUser();
  return (
    <Mui.Card
      sx={{
        overflow: "visible",
        mt: 10,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
      }}
    >
      <Mui.CardContent component={Mui.Stack} alignItems="center">
        <Mui.Paper
          sx={{
            p: 0.5,
            width: "fit-content",
            height: "fit-content",
            mt: -10,
            borderRadius: "100%",
            bgcolor: "background.default",
          }}
        >
          <Mui.Avatar
            src={user?.photoURL || ""}
            sx={{
              height: 100,
              width: 100,
            }}
          >
            {user?.displayName?.[0]}
          </Mui.Avatar>
        </Mui.Paper>
        <Mui.Stack direction="row" alignItems="center" justifyContent="center">
          <Mui.Typography variant="h6">{user?.displayName}</Mui.Typography>
          <Mui.IconButton size="small" component={Router.Link} to="edit">
            <MuiIcons.Edit fontSize="inherit" />
          </Mui.IconButton>
        </Mui.Stack>
        <Mui.Grid container maxWidth="sm" spacing={2}>
          <Mui.Grid item xs={12} sm={6}>
            <Mui.Stack>
              <Components.StackLabel
                title="Email"
                value={
                  <Mui.Stack direction="row" alignItems="center">
                    {user?.email}
                    <MuiIcons.Verified color="primary" />
                  </Mui.Stack>
                }
                medium
              />
              <Components.StackLabel
                title="Contact"
                value={
                  <Mui.Stack direction="row" alignItems="center">
                    {user?.phoneNumber}
                    <MuiIcons.Verified color="primary" />
                  </Mui.Stack>
                }
                medium
              />
              <Components.StackLabel title="Followers" value="57" medium />
              <Components.StackLabel title="Likes" value="572" medium />
              <Components.StackLabel title="Comments" value="102" medium />
            </Mui.Stack>
          </Mui.Grid>
          <Mui.Grid item xs={12} sm={6}>
            <Mui.Stack justifyContent="space-between" sx={{ height: "100%" }}>
              <Components.StackLabel
                title="Badge"
                value={<Mui.Chip label="Premium" color="primary" />}
                medium
              />
              <Components.StackLabel
                title="Performance(50%)"
                value={
                  <Mui.LinearProgress
                    color="primary"
                    variant="determinate"
                    value={50}
                    sx={{ height: 10 }}
                  />
                }
                medium
              />
              <Components.StackLabel
                title="Overall Ratings(356)"
                value={
                  <Mui.Stack direction="row" spacing={1}>
                    {new Array(5).fill(undefined).map((_val, index) => (
                      <MuiIcons.HandymanRounded
                        key={index}
                        sx={{
                          color:
                            3 > index ? "primary.main" : Mui.colors.grey[500],
                        }}
                      />
                    ))}
                  </Mui.Stack>
                }
                medium
              />
              <Components.StackLabel title="Duty Posts" value="2" medium />
              <Components.StackLabel title="Skill Posts" value="8" medium />
            </Mui.Stack>
          </Mui.Grid>
        </Mui.Grid>
      </Mui.CardContent>
    </Mui.Card>
  );
};
