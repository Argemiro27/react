import React from "react";
import {
  Route,
  Redirect,
  RouteComponentProps,
  RouteProps,
} from "react-router-dom";
import api from "api";
import { useAuth } from "hooks/auth";

interface PrivateRouteParams extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

export function PrivateRoute({
  component: Component,
  ...rest
}: PrivateRouteParams) {
  const { token } = useAuth();

  api.interceptors.request.use(async (request) => {
    if (token !== "") {
      request.headers.authorization = `Bearer ${token}`;
    }
    return request;
  });

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
