import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import { getActivities } from "../api";

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

  return (
    <CallContext.Provider value={{ activities, isLoading, error }}>
      {children}
    </CallContext.Provider>
  );
};

CallProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
