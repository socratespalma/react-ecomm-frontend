import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import MasterLayout from "./views/admin/MasterLayout";
import Notiflix from "notiflix";

const AdminPrivateRoute = ({ ...rest }) => {
  const history = useHistory();
  const [Authenticated, setAuthenticated] = useState(false);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/checkingAuthenticated`).then((res) => {
      if (res.data.status === 200) {
        setAuthenticated(true);
      }
      setLoading(false);
    });

    return () => {
      setAuthenticated(false);
    };
  }, []);

  axios.interceptors.response.use(
    undefined,
    function axiosRetryInterceptor(err) {
      if (err.response.status === 401) {
        Notiflix.Notify.failure(err.response.data.message);
        history.push("/");
      }
      return Promise.reject(err);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 403) {
        //Access Denied
        Notiflix.Notify.failure(error.response.data.message);
        history.push("/403");
      } else if (error.response.status === 404) {
        //Page not found
        Notiflix.Notify.failure("Page not found");
        history.push("/404");
      }
      return Promise.reject(error);
    }
  );

  if (Loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Route
      {...rest}
      render={({ props, location }) =>
        Authenticated ? (
          <MasterLayout {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

export default AdminPrivateRoute;
