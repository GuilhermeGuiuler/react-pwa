import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home";
import Details from "./pages/details";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/details/:id" component={Details} />
    </Router>
  );
};
export default Routes;
