import PropTypes from "prop-types";
import { Button, Typography, Stack } from "@mui/material";
import { formatDate } from "../../utils/dateUtils";

export default function CallHeader({ date }) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="body2" sx={{ my: 1, textAlign: "center" }}>
        {formatDate(date)}
      </Typography>

      <Button
        variant="text"
        disableRipple
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
  );
}

CallHeader.propTypes = {
  date: PropTypes.string.isRequired,
};
