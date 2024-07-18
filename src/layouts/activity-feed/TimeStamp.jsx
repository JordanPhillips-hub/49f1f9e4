import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { formatTime } from "../../utils/dateUtils";

export default function TimeStamp({ time }) {
  return (
    <Typography
      variant="body3"
      sx={{ position: "absolute", bottom: 18, right: 15 }}
    >
      {formatTime(time)}
    </Typography>
  );
}

TimeStamp.propTypes = {
  time: PropTypes.string.isRequired,
};
