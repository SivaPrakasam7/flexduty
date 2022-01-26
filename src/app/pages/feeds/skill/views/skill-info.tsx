import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Components from "src/app/components";

export const SkillInfo = ({ profile = "", name }: skillInfo.Props) => (
  <Mui.Grid container alignItems="center" spacing={1}>
    <Mui.Grid item xs={12} sm={6}>
      <Mui.Stack direction="row" spacing={1} alignItems="center">
        <Mui.Avatar src={profile}>{name[0]}</Mui.Avatar>
        <Mui.Typography variant="body1" color="text.secondary">
          {name}
        </Mui.Typography>
      </Mui.Stack>
    </Mui.Grid>
    <Mui.Grid item xs={12} sm={6}>
      <Mui.Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Mui.IconButton color="primary" title="Review">
          <MuiIcons.RateReview />
        </Mui.IconButton>
        <Mui.IconButton color="primary" title="Message">
          <MuiIcons.Message />
        </Mui.IconButton>
      </Mui.Stack>
    </Mui.Grid>
    <Mui.Grid item xs={12}>
      <Components.StackLabel
        title="Recent comments"
        value={
          <Mui.Stack
            spacing={1}
            sx={{
              bgcolor: "#00000010",
              height: 100,
              p: 1,
              borderRadius: 1,
              overflowY: "auto",
              mb: -3,
            }}
          >
            {new Array(4).fill(undefined).map((val, index) => (
              <Components.Chats.Chat
                key={index}
                name={`name${index}`}
                message="MSG"
                time={new Date().toLocaleTimeString()}
              />
            ))}
          </Mui.Stack>
        }
      />
    </Mui.Grid>
  </Mui.Grid>
);

export declare namespace skillInfo {
  export interface Props {
    profile?: string;
    name: string;
  }
}
