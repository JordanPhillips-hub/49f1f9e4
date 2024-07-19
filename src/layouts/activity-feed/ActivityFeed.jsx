import { Card, Box, Button, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import CallIcon from "./CallIcon";
import CallInfo from "./CallInfo";
import TimeStamp from "./TimeStamp";
import CallHeader from "./CallHeader";
import { useCallContext, useNavigationContext } from "../../hooks/api.hooks";

export default function ActivityFeed() {
  const { activities, isLoading, updateAllCallsArchive } = useCallContext();
  const { currentView } = useNavigationContext();

  const filteredActivities = activities.filter((activity) => {
    return currentView === "All Calls"
      ? !activity.is_archived
      : currentView === "Archived Calls"
      ? activity.is_archived
      : true;
  });

  const buttonLabel =
    currentView === "All Calls" ? "Archive All Calls" : "Unarchive All Calls";

  if (isLoading) return <Typography>Loading activity feed...</Typography>;
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
        {buttonLabel}
      </Button>

      {filteredActivities.length === 0 ? (
        <Typography sx={{ textAlign: "center", mt: 2 }}>
          No calls to display
        </Typography>
      ) : (
        filteredActivities.map(
          ({
            id,
            created_at,
            is_archived,
            call_type,
            from,
            to,
            via,
            duration,
          }) => (
            <Box key={id} sx={{ mb: 2 }}>
              <CallHeader date={created_at} id={id} is_archived={is_archived} />
              <Card sx={{ p: 2, position: "relative" }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <CallIcon callType={call_type} />
                  <CallInfo
                    callFrom={from}
                    callTo={to}
                    callVia={via}
                    duration={duration}
                  />
                  <TimeStamp time={created_at} />
                </Stack>
              </Card>
            </Box>
          )
        )
      )}
    </Box>
  );
}

ActivityFeed.propTypes = {
  id: PropTypes.string,
  created_at: PropTypes.string,
  is_archived: PropTypes.bool,
  call_type: PropTypes.string,
  from: PropTypes.number,
  to: PropTypes.number,
  via: PropTypes.number,
  duration: PropTypes.number,
};
