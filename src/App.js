import Header from './Components/Header'
import Landing from './Components/Landing'
import Signup from './Components/Signup'
import Login from './Components/Login';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { auth } from './firebaseconfig'
import {useDispatch, useSelector} from 'react-redux'
import Preloader from './Components/Preloader'
import {login, logout} from './actions'

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const [isLoading, setIsLoading] = useState(true)
   const dispatch = useDispatch()

        useEffect(() => {
          auth.onAuthStateChanged((authUser) => {
            if(authUser){
              dispatch(login())
              setIsLoading(false)
              
          }else{
               dispatch(logout())   
               setIsLoading(false)
          }
              })
        }, [dispatch])
  

  return (
    <>

      {
        isLoading?
            <div className="w-screen h-screen flex justify-center items-center">
              <Preloader />
            </div>
            :
            <Router>
            <div className="h-screen flex flex-col">
                <Header />
              {  
                isLoggedIn?
                  <div> Logged in </div>
                  :
                          <Switch >
                            <Route exact component={Landing} path="/" />
                            <Route exact component={Login} path="/login" />
                            <Route exact component={Signup} path="/signup" />
                          </Switch>
                  
                }
              </div>
              </Router >
      }
    </>
  );
}

export default App;
