import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CallProvider } from "./providers/CallProvider";
import { NavigationProvider } from "./providers/NavigationProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavigationProvider>
      <CallProvider>
        <App />
      </CallProvider>
    </NavigationProvider>
  </React.StrictMode>
);
