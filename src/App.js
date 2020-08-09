import React from "react";
import "./assets/css/theme.css";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
