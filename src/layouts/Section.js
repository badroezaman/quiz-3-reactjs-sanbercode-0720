import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import About from "../components/About";
import Home from "../components/Home";
import Movies from "../components/Film";
import Login from "../components/Login";
import { UserContext } from "../context/UserContext";

const Section = () => {
  const [user] = useContext(UserContext);

  const PrivateRoute = ({ user, ...props }) => {
    if (user) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  const LoginRoute = ({ user, ...props }) =>
    user ? <Redirect to="/" /> : <Route {...props} />;

  return (
    <section>
      <Switch>
        <Route exact path="/" user={user} component={Home} />
        <Route exact path="/about" user={user} component={About} />
        <LoginRoute exact path="/login" user={user} component={Login} />
        <PrivateRoute exact path="/movies" user={user} component={Movies} />
      </Switch>
    </section>
  );
};

export default Section;
