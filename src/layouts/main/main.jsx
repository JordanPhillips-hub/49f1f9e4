import { useEffect, useState } from "react";
import { Card, Box, Button, Typography, Stack } from "@mui/material";
import { Icon } from "@iconify/react";
import { formatDate, formatTime } from "../../utils/dateUtils";
import { formatDuration } from "../../utils/generalUtils";

export default function Main() {
  const [activities, setActivities] = useState([]);

  const baseUrl = "https://aircall-backend.onrender.com";

  const getActivities = async () => {
    const response = await fetch(`${baseUrl}/activities`);
    if (!response.ok) throw new Error("Error");
    return await response.json();
  };

  const fetchAndSetActivities = () => getActivities().then(setActivities);

  useEffect(() => {
    fetchAndSetActivities().catch((err) =>
      console.error("Error fetching activities", err)
    );
  }, []);

  return (
    <Box component="main" sx={{ p: 2, overflowY: "scroll", maxHeight: "80%" }}>
      <Button variant="outlined" fullWidth>
        Archive all calls
      </Button>

      {activities.map((activity) => (
        <Box key={activity.id}>
          <Stack direction="row" justifyContent="space-between">
            <Typography sx={{ my: 1, textAlign: "center" }} variant="body2">
              {formatDate(activity.created_at)}
            </Typography>

            <Button
              variant="text"
              sx={{
                textTransform: "none",
                "&:hover": {
                  bgcolor: "transparent",
                  textDecoration: "underline",
                },
              }}
            >
              Archive
            </Button>
          </Stack>

          <Card sx={{ mb: 2, p: 2, position: "relative" }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Icon
                width={25}
                icon={
                  activity.call_type === "missed"
                    ? "uil:missed-call"
                    : activity.call_type === "answered"
                    ? "mdi:call-outline"
                    : "ic:sharp-voicemail"
                }
                color={activity.call_type === "missed" ? "red" : "green"}
              ></Icon>

              <Stack direction="column">
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="body2">From: {activity.from}</Typography>
                  <Icon icon="ph:arrow-right-thin"></Icon>
                  <Typography variant="body2">To: {activity.to}</Typography>
                </Stack>

                <Typography variant="body2">Via: {activity.via}</Typography>
                <Typography variant="body2">
                  Duration: {formatDuration(activity.duration)}
                </Typography>
              </Stack>

              <Typography
                variant="body3"
                sx={{ position: "absolute", bottom: 18, right: 15 }}
              >
                {formatTime(activity.created_at)}
              </Typography>
            </Stack>
          </Card>
        </Box>
      ))}
    </Box>
  );
}
