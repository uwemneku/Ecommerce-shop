import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from '../Components/Landing'
import Login from '../Components/Login'
import Signup from '../Components/Signup'


export default function RootRoute() {
    return (
        <Switch >
            <Route exact component={Landing} path="/" />
            <Route exact component={Login} path="/login" />
            <Route exact component={Signup} path="/signup" />
        </Switch>
    )
}
