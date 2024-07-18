import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CallProvider } from "./providers/CallProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CallProvider>
      <App />
    </CallProvider>
  </React.StrictMode>
);
