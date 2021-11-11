import React from 'react'
import { Login } from './component/Login'
import { Register } from './component/Register'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Password from './component/Password';
import ResetPassword from './component/ResetPassword';
import HomePage from './component/HomePage'
import './App.css'


const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <Route path="/homepage" component={HomePage}/>
          <Route exact path="/password" component={Password} />
          <Route exact path='/reset/:token/:email' component={ResetPassword} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
