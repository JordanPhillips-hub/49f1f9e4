import { Card, Box, Button, Stack } from "@mui/material";
import CallIcon from "./CallIcon";
import CallInfo from "./CallInfo";
import TimeStamp from "./TimeStamp";
import CallHeader from "./CallHeader";
import { useCallContext, useNavigationContext } from "../../hooks/api.hooks";

export default function ActivityFeed() {
  const { activities, isLoading, updateAllCallsArchive } = useCallContext();
  const { currentView } = useNavigationContext();

  const filteredActivities = activities.filter((activity) => {
    switch (currentView) {
      case "Archived Calls":
        return activity.is_archived;
      case "All Calls":
        return !activity.is_archived;
      default:
        return true;
    }
  });

  if (isLoading) return <Box>Loading activity feed...</Box>;
  return (
    <Box
      component="main"
      sx={{
        p: 2,
        overflowY: "scroll",
        maxHeight: "80%",
      }}
    >
      <Button variant="outlined" fullWidth onClick={updateAllCallsArchive}>
        {`${
          currentView === "All Calls"
            ? "Archive All Calls"
            : "Unarchive All Calls"
        }`}
      </Button>

      {filteredActivities.map((activity) => (
        <Box key={activity.id}>
          <CallHeader
            date={activity.created_at}
            id={activity.id}
            is_archived={activity.is_archived}
          />

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
