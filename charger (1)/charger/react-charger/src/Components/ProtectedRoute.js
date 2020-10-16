import React from 'react'
import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute(props) {

  let output=null;

  if(props.isUserLogged)
  {
    output = <Route {...props} />
  }
  else
  {
    output = <Redirect to='/' />;
  }

  return (
    <>
    { output }
    </>
  ) 
}




/*import React from 'react'
// import Auth from './components/Auth';
import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute(props) {
  const { isAuthenticated, ...rest } = props;
  let output;

  if(isAuthenticated)
  {
    output = <Route {...rest} />
  }
  else
  {
    output = <Redirect to='/' />;
  }

  return <React.Fragment>{ output }</React.Fragment> //eventuell rausnehmen aber sonst übernehmen
}*/