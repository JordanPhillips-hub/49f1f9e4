import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState("All Calls");

  const handleCurrentView = (tab) => setCurrentView(tab);

  return (
    <NavigationContext.Provider value={{ currentView, handleCurrentView }}>
      {children}
    </NavigationContext.Provider>
  );
};

NavigationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
