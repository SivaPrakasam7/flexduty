import * as Mui from "@mui/material";

export const Chat = ({
  profile = "",
  name,
  message,
  time,
  alter,
}: chat.Props) => (
  <Mui.Paper
    component={Mui.Stack}
    spacing={1}
    direction="row"
    alignItems="center"
    alignSelf={alter ? "end" : "start"}
    sx={{
      p: 1,
      maxWidth: "fit-content",
      overflow: "visible",
      position: "relative",
      "&::before": {
        content: '""',
        display: "block",
        bgcolor: "background.paper",
        height: 15,
        width: 15,
        position: "absolute",
        top: 3,
        left: alter ? "auto" : -4,
        right: alter ? -4 : "auto",
        transform: "rotate(45deg)",
      },
    }}
  >
    <Mui.Avatar src={profile} sx={{ height: 30, width: 30 }}>
      {name[0]}
    </Mui.Avatar>
    <Mui.Box>
      <Mui.Typography variant="caption" color="text.secondary">
        {name} @ {time}
      </Mui.Typography>
      <Mui.Typography variant="body2">{message}</Mui.Typography>
    </Mui.Box>
  </Mui.Paper>
);

export declare namespace chat {
  export interface Props {
    profile?: string;
    name: string;
    message: string;
    time: string;
    alter?: boolean;
  }
}

// SAMPLE <Components.Chats.Chat name="Name" message="MSG" time={new Date().toLocaleTimeString()} />
