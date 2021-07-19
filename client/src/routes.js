import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {MainPage} from './pages/MainPage'
import {AuthPage} from './pages/AuthPage'
import {RegisPage} from './pages/RegisPage'
export const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return(
            <Switch>
                <Route path = "/main/:id" exact>
                    <MainPage/>
                </Route>
                <Redirect to ="/"/>
            </Switch>
        )
    }
    return(
        <Switch>
            <Route path = "/" exact>
                <AuthPage/>
            </Route>
            <Route path = "/registration" exact>
                <RegisPage/>
            </Route>
            <Redirect to ="/"/>
        </Switch>
    )
}