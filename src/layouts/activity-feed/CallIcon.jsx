import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const callTypeIcons = {
  missed: "uil:missed-call",
  answered: "mdi:call-outline",
  voicemail: "ic:sharp-voicemail",
};

const callTypeColors = {
  missed: "red",
  answered: "green",
  voicemail: "inherit",
};
export default function CallIcon({ callType }) {
  return (
    <Icon
      width={25}
      icon={callTypeIcons[callType]}
      color={callTypeColors[callType]}
    />
  );
}

CallIcon.propTypes = {
  callType: PropTypes.oneOf(["missed", "answered", "voicemail"]).isRequired,
};
