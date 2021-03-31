import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInuser , setloggedInuser] = useContext(userContext)
    
    // let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
      loggedInuser.isSignIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
