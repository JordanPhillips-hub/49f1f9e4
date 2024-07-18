import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

export default function CallIcon({ callType }) {
  return (
    <Icon
      width={25}
      icon={
        callType === "missed"
          ? "uil:missed-call"
          : callType === "answered"
          ? "mdi:call-outline"
          : "ic:sharp-voicemail"
      }
      color={callType === "missed" ? "red" : "green"}
    />
  );
}

CallIcon.propTypes = {
  callType: PropTypes.oneOf(["missed", "answered", "voicemail"]).isRequired,
};
