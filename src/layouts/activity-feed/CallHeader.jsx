import PropTypes from "prop-types";
import { Typography, Stack, IconButton } from "@mui/material";
import { formatDate } from "../../utils/dateUtils";
import { useCallContext } from "../../hooks/api.hooks";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";

export default function CallHeader({ date, id, is_archived }) {
  const { updateCallArchive } = useCallContext();

  const handleArchiveToggle = () => {
    updateCallArchive(id, !is_archived);
  };

  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="body2" sx={{ my: 1, textAlign: "center" }}>
        {formatDate(date)}
      </Typography>

      <IconButton
        size="small"
        onClick={handleArchiveToggle}
        sx={{
          "&:hover": {
            backgroundColor: "transparent",
            "& .MuiSvgIcon-root": {
              color: "red",
            },
          },
        }}
      >
        {is_archived ? <UnarchiveOutlinedIcon /> : <ArchiveOutlinedIcon />}
      </IconButton>
    </Stack>
  );
}

CallHeader.propTypes = {
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  is_archived: PropTypes.bool.isRequired,
};
