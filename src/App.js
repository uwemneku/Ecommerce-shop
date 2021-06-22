import Header from './Components/Header'
import './App.css';
import React, { useEffect, useState } from 'react';
import { auth } from './firebaseconfig'
import {useDispatch, useSelector} from 'react-redux'
import Preloader from './Components/Preloader'
import {login, logout} from './actions'
import RootRoute from './Routes/RootRoute'

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const [isLoading, setIsLoading] = useState(true)  
   const dispatch = useDispatch()

   //checks to see if the user is logged in and then set laoding state
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

      { isLoading ?
            <div className="w-screen h-screen flex justify-center items-center">
              <Preloader />
            </div>
            :
            <div className="h-screen flex flex-col">
                <Header />
              {  isLoggedIn ? <div> Logged in </div> : <RootRoute /> }
            </div>
      }
    </>
  );
}

export default App;
