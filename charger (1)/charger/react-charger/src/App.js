import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import VisitorView from './Components/VisitorView';
import Login from './Components/Login';
import Homepage from "./Components/Homepage";
import ProtectedRoute from './Components/ProtectedRoute';
import UserView from "./Components/UserView";
import axios from 'axios';
//import constants from './Components/authentication/constants.json';
//import Auth from './Components/authentication/Auth';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLogged: false,
      setIsUserLogged: false,
    }
  }
giveAlert = () => {alert("jo was geht")}

   processLoginClick = (history) => {
    alert("Click");
    axios.post('http://localhost:3000/login', 
                  {}, 
                  {auth:{
                    username: 'marlene',
                    password: '123456'
                  }})
                  .then(response =>{
                    console.log('login successful');
                    this.setState({setIsUserLogged: true});
                    history.push('/UserView');
                  })
                  .catch(error => console.log(error));
  }

  render (){

    return (
      <Router>
        <Header/>
          <Route path="/visitorview">
            <VisitorView />
          </Route>
          <Route path="/Login" exact render={
          (routeProps) =>
            <Login {...routeProps} onLoginClick={this.processLoginClick}/>
          }
          />
          <Route path="/UserView">
            <UserView />
          </Route>
          <ProtectedRoute path="/UserView" exact component ={UserView} isUserLogged={this.isUserLogged}/>
        <Homepage/> 
        <Footer/> 
      </Router> 
    )
  }
}
  export default App;

//----------


/*
import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import VisitorView from './Components/VisitorView';
import Login from './Components/Login';
import Homepage from "./Components/Homepage";
import ProtectedRoute from './Components/ProtectedRoute';
import UserView from "./Components/UserView";
import axios from 'axios';
import constants from './Components/authentication/constants.json';
import Auth from './Components/authentication/Auth';

export default class App extends React.Component  {

  constructor(props)
  {
    super(props);
    this.state = {
      isAuthenticated: false,
      someData: []
    };
  }

  onLogin = () => {
    this.setState({ isAuthenticated: true })
  }

  onLoginFail = () => {
    this.setState({ isAuthenticated: false });
    console.log("Login failed");
  }

  This function illustrates how some protected API could be accessed
  loadProtectedData = () => {
    axios.get(constants.baseAddress + '/dogs', Auth.getAxiosAuth()).then(results => {
      this.setState({ someData: results.data.dogs });
    })
  }

  render ()
  {
    return (
      <Router>
        <Header/>
          <Route path="/visitorview">
            <VisitorView />
          </Route>
          <Route path="/Login" exact render={
          (routeProps) =>
            <Login loginSuccess = { this.onLogin }
            loginFail = { this.onLoginFail }
            userInfo={ this.state.userInfo }
            redirectPathOnSuccess="/UserView"
            {...routeProps}/>
          }
          />
          <ProtectedRoute isAuthenticated={this.state.isAuthenticated} path="/UserView" exact render={
            (routeProps) =>
              <UserView
                loadProtectedData={ this.loadProtectedData }
                someData={ this.state.someData }
                />
          }>
          </ProtectedRoute>
        <Homepage/>  
        <Footer/> 
      </Router> 
    )
  }
 }
*/
//-------------------------------
//-------------------------------

 //import React from 'react';
/*
import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (

      <Router>

      </Router>
    );
  }
}*/
/*
export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/locationmap">LocationMap</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/login">
            <LocationMap />
          </Route>
          <Route path="/locationmap">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
*/


