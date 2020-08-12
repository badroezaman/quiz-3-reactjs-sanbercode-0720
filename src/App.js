// import React from "react";
// import "./assets/css/theme.css";

// import { BrowserRouter as Router } from "react-router-dom";
// import Routes from "./components/Routes";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes />
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Main from "./layouts/Main";
import "./assets/css/theme.css";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Main />
      </UserProvider>
    </>
  );
}

export default App;
