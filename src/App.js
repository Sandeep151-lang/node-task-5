import React from 'react'
import { Login } from './component/Login'
import { Register } from './component/Register'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ForgotPassword from './component/ForgotPassword';
import Password from './component/Password';
import ResetPassword from './component/ResetPassword';
import './App.css'


const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/reg' component={Register} />
          <Route exact path='/' component={Login} />
          <Route path="/for" component={ForgotPassword} />
          <Route exact path="/password" component={Password} />
          <Route exact path='/reset/:token/:email' component={ResetPassword} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
