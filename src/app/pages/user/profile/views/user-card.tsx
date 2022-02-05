import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";

export const UserCard = ({
  variant,
  profile,
  name,
  badge,
  message,
  status,
}: userCard.Props) => (
  <Mui.Card sx={{ maxHeight: 80, position: "relative", m: 1 }}>
    <Mui.CardContent component={Mui.Stack} direction="row" alignItems="center">
      <Mui.Avatar src={profile as string} sx={{ height: 50, width: 50 }}>
        {name[0]}
      </Mui.Avatar>
      <Mui.Box sx={{ maxWidth: "70%" }}>
        <Mui.Typography variant="h6" noWrap>
          {name}
          <Mui.Chip label={badge} color="primary" size="small" sx={{ m: 1 }} />
        </Mui.Typography>
        <Mui.Typography variant="body2" noWrap>
          {message}
        </Mui.Typography>
      </Mui.Box>
      <Mui.Typography
        variant="caption"
        color="primary"
        sx={{ position: "absolute", right: 5, bottom: 0 }}
      >
        {status}
      </Mui.Typography>
      <Mui.Box sx={{ position: "absolute", top: 5, right: 5 }}>
        {
          {
            follower: (
              <Mui.IconButton size="small" sx={{ color: Mui.colors.blue[900] }}>
                <MuiIcons.Message />
              </Mui.IconButton>
            ),
            following: (
              <Mui.IconButton size="small" color="error">
                <MuiIcons.PersonRemove />
              </Mui.IconButton>
            ),
          }[variant]
        }
      </Mui.Box>
    </Mui.CardContent>
  </Mui.Card>
);

export declare namespace userCard {
  export interface Props {
    variant: "follower" | "following";
    profile?: string;
    name: string;
    badge: string;
    message: string;
    status: string;
  }
}
