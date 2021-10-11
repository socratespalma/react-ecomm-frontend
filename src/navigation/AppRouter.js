import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../views/auth/Login";
import Signup from "../views/auth/Signup";
import Home from "../views/common/Home";
import AboutUs from "../views/common/AboutUs";
import Help from "../views/common/Help";
import Legal from "../views/common/Legal";
import PrivacyPolicy from "../views/common/PrivacyPolicy";
import TermsOfUse from "../views/common/TermsOfUse";
import NotFound from "../views/common/NotFound";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/legal-info" component={Legal} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/terms-of-use" component={TermsOfUse} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
