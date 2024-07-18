import PropTypes from "prop-types";
import { Button, Typography, Stack } from "@mui/material";
import { formatDate } from "../../utils/dateUtils";
import { useCallContext } from "../../hooks/api.hooks";

export default function CallHeader({ date, id, is_archived }) {
  const { updateCallArchive } = useCallContext();

  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="body2" sx={{ my: 1, textAlign: "center" }}>
        {formatDate(date)}
      </Typography>

      <Button
        variant="text"
        disableRipple
        onClick={() => updateCallArchive(id, !is_archived)}
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
  id: PropTypes.string.isRequired,
  is_archived: PropTypes.bool.isRequired,
};
