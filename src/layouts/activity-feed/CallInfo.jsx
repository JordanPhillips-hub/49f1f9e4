import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { Typography, Stack, Divider } from "@mui/material";
import { formatDuration } from "../../utils/generalUtils";

export default function CallInfo({ callFrom, callTo, callVia, duration }) {
  return (
    <Stack direction="column">
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="body2">From: {callFrom}</Typography>
        <Icon icon="ph:arrow-right-thin" />
        <Typography variant="body2">To: {callTo}</Typography>
      </Stack>

      <Divider flexItem sx={{ borderColor: "lightgray", mb: 1 }} />

      <Stack>
        <Typography variant="body2">Via: {callVia}</Typography>
        <Typography variant="body2">
          Duration: {formatDuration(duration)}
        </Typography>
      </Stack>
    </Stack>
  );
}

CallInfo.propTypes = {
  callFrom: PropTypes.number.isRequired,
  callTo: PropTypes.number.isRequired,
  callVia: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};
