import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {MainPage} from './pages/MainPage'
import {AuthPage} from './pages/AuthPage'
import {RegisPage} from './pages/RegisPage'
//import {AdminAuthPage} from './pages/AdminAuthPage'
//import {AdminPage} from './pages/AdminPage'
export const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return(
            <Switch>
                <Route path = "/main/:id" exact>
                    <MainPage />
                </Route>
                <Redirect to ="/"/>
            </Switch>
        )
    }
    return(
        <Switch>
            <Route path = "/" exact>
                <AuthPage />
            </Route>
            <Route path = "/registration" exact>
                <RegisPage/>
            </Route>
            
            
        </Switch>
    )
}