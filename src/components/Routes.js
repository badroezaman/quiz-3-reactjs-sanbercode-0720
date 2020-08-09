import React from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./Nav";

import Home from "./Home";
import About from "./About";
import MovieListEditor from "./MovieListEditor";
import Auth from "../context/Auth";
// import Film from "./Film";

import Footer from "./Footer";

function Routes() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        {/* <Route path="/film" component={Film} /> */}
        <Route exact path="/movie-list" component={MovieListEditor} />
        <Route exact path="/auth" component={Auth} />
      </Switch>
      <Footer />
    </>
  );
}

export default Routes;
