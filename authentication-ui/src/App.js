import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import loadable from '@loadable/component';

import NoMatch from './components/NoMatch';
import { routes, constants } from './config/constants';
import SignIn from './components/Authentication/SignIn';
import SignUp from './components/Authentication/SignUp';

const Main = loadable(() => import(/* webpackChunkName: "Main" */
  './containers/Main'), {
  fallback: <span>Loading...</span>
})

// A wrapper for <Route> that redirects to the SIGNIN
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
  let authToken = localStorage.getItem(constants.AUTH_TOKEN);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authToken ? (
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
        <Route path={routes.SIGNIN}>
          <SignIn />
        </Route>
        <Route path={routes.SIGNUP}>
          <SignUp />
        </Route>
        <Route path={routes.NO_MATCH}>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}
