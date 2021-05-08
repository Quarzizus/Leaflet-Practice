import React from "react";
import ReactDOM from "react-dom";
import AppState from "./context/AppState";
import App from "./routes/App";

ReactDOM.render(
  <AppState>
    <App />
  </AppState>,

  document.getElementById("App")
);
