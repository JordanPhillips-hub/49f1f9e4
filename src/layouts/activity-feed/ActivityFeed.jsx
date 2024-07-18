import { Card, Box, Button, Stack } from "@mui/material";
import CallIcon from "./CallIcon";
import CallInfo from "./CallInfo";
import TimeStamp from "./TimeStamp";
import CallHeader from "./CallHeader";
import { useCallContext } from "../../hooks/api.hooks";

export default function ActivityFeed() {
  const { activities, isLoading } = useCallContext();

  if (isLoading) return <Box>Loading activity feed...</Box>;

  return (
    <Box component="main" sx={{ p: 2, overflowY: "scroll", maxHeight: "80%" }}>
      <Button variant="outlined" fullWidth>
        Archive all calls
      </Button>

      {activities.map((activity) => (
        <Box key={activity.id}>
          <CallHeader date={activity.created_at} />

          <Card sx={{ mb: 2, p: 2, position: "relative" }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <CallIcon callType={activity.call_type} />

              <CallInfo
                callFrom={activity.from}
                callTo={activity.to}
                callVia={activity.via}
                duration={activity.duration}
              />

              <TimeStamp time={activity.created_at} />
            </Stack>
          </Card>
        </Box>
      ))}
    </Box>
  );
}
