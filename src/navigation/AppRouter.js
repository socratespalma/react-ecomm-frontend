import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Login from "../views/auth/Login";
import Signup from "../views/auth/Signup";
import Home from "../views/common/Home";
import AboutUs from "../views/common/AboutUs";
import Help from "../views/common/Help";
import Legal from "../views/common/Legal";
import PrivacyPolicy from "../views/common/PrivacyPolicy";
import TermsOfUse from "../views/common/TermsOfUse";
import NotFound from "../views/common/NotFound";
import AdminPrivateRoute from "../AdminPrivateRoute";
import Page403 from "../components/errors/Page403";
import Page404 from "../components/errors/Page404";
import ProductDetail from "../components/products/ProductDetail";
import Products from "../views/common/Products";
import Forgot from "../views/auth/Forgot";
import Reset from "../views/auth/Reset";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/403" component={Page403} />
        <Route path="/404" component={Page404} />

        <Route path="/login">
          {localStorage.getItem("auth_token") ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/signup">
          {localStorage.getItem("auth_token") ? (
            <Redirect to="/" />
          ) : (
            <Signup />
          )}
        </Route>

        {/* <Route
          path="/admin"
          name="Admin"
          render={(props) => <MasterLayout {...props} />}
        /> */}
        <AdminPrivateRoute path="/admin" name="Admin" />

        <Route exact path="/products" component={Products} />
        <Route exact path="/product-detail" component={ProductDetail} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/reset" component={Reset} />
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
