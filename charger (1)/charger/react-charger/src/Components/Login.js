import React from 'react';
import {Link} from 'react-router-dom';
import './Login.module.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
    render (){

    return (
      <div>
        <div>
          <h2>Login</h2>
        <div>
          <p>Please give your username and password to login</p>
        </div>

      <form onSubmit={()=> this.props.onLoginClick()}>
        <div>
        <p>Username</p> <input type="text" name="username" />
        </div>
        <div>
        <p>Password</p> <input type="text" name="password" />
        </div>
        <div>
          <Link to='/UserView'><button type="submit"><h4>Login</h4></button></Link>
        </div>
      </form>
    </div>
      </div>
    )
    }
    }

    export default Login;
  /*function login(event)
  {
    event.preventDefault();
    Auth.authenticate(event.target['username'].value, event.target['password'].value)
      .then(result =>
        {
          props.loginSuccess();
          props.history.push(props.redirectPathOnSuccess);
          console.log("loginButtonfunzt")
        })
      .catch(() => {
        props.loginFail();
      })
  }*/