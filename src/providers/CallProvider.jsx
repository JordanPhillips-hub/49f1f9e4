import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import { Requests } from "../api";
import { useNavigationContext } from "../hooks/api.hooks";

export const CallContext = createContext();

export const CallProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentView } = useNavigationContext();
  const fetchAndSetActivities = () =>
    Requests.getActivities().then(setActivities);

  const updateAllCallsArchive = () => {
    setActivities(
      activities.map((activity) => ({
        ...activity,
        is_archived: currentView === "All Calls" ? true : false,
      }))
    );
  };

  const updateCallArchive = (id, is_archived) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id ? { ...activity, is_archived } : activity
      )
    );

    return Requests.patchCallArchive(id, is_archived);
  };

  useEffect(() => {
    fetchAndSetActivities()
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <CallContext.Provider
      value={{
        activities,
        isLoading,
        error,
        updateCallArchive,
        updateAllCallsArchive,
      }}
    >
      {children}
    </CallContext.Provider>
  );
};

CallProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
