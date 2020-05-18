import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import loadable from '@loadable/component';

import NoMatch from './components/NoMatch';
import { routes } from './config/constants';
import SignIn from './components/SignIn/SignIn';

const Main = loadable(() => import(/* webpackChunkName: "Main" */
  './containers/Main'), {
  fallback: <span>Loading...</span>
})

// A wrapper for <Route> that redirects to the SIGNIN
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
  let isAuthenticated = localStorage.getItem('isAuthenticated');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated === "true" ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: routes.SIGNIN,
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

export default function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path={routes.MAIN}>
          <Main />
        </PrivateRoute>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path={routes.NO_MATCH}>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}
