import Header from './Components/Header'
import Landing from './Components/Landing'
import Signup from './Components/Signup'
import Login from './Components/Login';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { auth } from './firebaseconfig'
import {useSelector} from 'react-redux'

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn)



  return (
    <Router>
      <div className="h-screen flex flex-col">
        <Header />
       {  
        isLoggedIn?
          <div> Logged in </div>
          :
          <>
            <Switch>
              <Route exact component={Landing} path="/" />
              <Route exact component={Login} path="/login" />
              <Route exact component={Signup} path="/signup" />
            </Switch>
          </>
        }
      </div>
    </Router>
  );
}

export default App;
