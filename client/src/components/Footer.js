import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

export const Footer = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <footer class="page-footer z-depth-2 amber darken-3">
                    <div class="container">
                        <div class="row">
                        <div class="col 10 s12">
                            <h5 class="white-text">Практическая работа. Главная страница</h5>
                            <p class="grey-text text-lighten-4"></p>
                        </div>
                        </div>
                    </div>
                <div class="footer-copyright">
                    <div class="container">
                    © 2021 Copyright 
                    <a class="grey-text text-lighten-4 right" href="#">Выход</a>
                    </div>
                </div>
    </footer>
    
  )
}