import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import { getActivities } from "../api";

import { Requests } from "../api";

export const CallContext = createContext();

export const CallProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getActivities()
      .then(setActivities)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  const updateCallArchive = (id, is_archived) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id ? { ...activity, is_archived } : activity
      )
    );

    return Requests.patchCallArchive(id, is_archived);
  };

  return (
    <CallContext.Provider
      value={{ activities, isLoading, error, updateCallArchive }}
    >
      {children}
    </CallContext.Provider>
  );
};

CallProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
