import React from 'react'
import image from './media/image2.jpg'

export const AuthPage = () => {
    return(
        <div className = "row">
            <div className = "col s6 offset-s3">
                <h1>Практика 2021</h1>
                <div className="card medium white darken-1 z-depth-2">
                    <div className="card-image center-align" style = {{padding:10}}>
                        <img src = {image} />
                            <span className="card-title white-text text-accent-4 ">Авторизация</span>
                    </div>
                    <div class="card-content auth-page" >
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="email" type="email" class="validate" name="email" className="orange-input"/>
                                <label for="email">Email</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="password" type="password" class="validate" name = "password" className="orange-input"/>
                                <label for="password">Пароль</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4" style = {{marginRight:10}} >Вход</button>
                        <a href = "/registration">Регистрация</a>
                    </div>
                </div>
            </div>
        </div>
    )
}