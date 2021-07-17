import React, {useState} from 'react'
import { useHttp } from '../hooks/http.hook'

export const RegisPage = () => {
    const {loading, request} = useHttp()
    const [form, setForm] = useState({
        name:'', email:'', phone:'', password:'', check_password:''
    })

    const changeHandler = event =>{
        setForm({ ...form, [event.target.name]: event.target.value})
    }
    
    const registerHandler = async () => {
        try {
            const data = await request ('/api/auth/register', 'POST', {...form})
            console.log('Data', data)
        } catch (e) {}
    }

    return(
        <div className = "row">
            <div className = "col s6 offset-s3 center-align">
                <h1>Практика 2021</h1>
                <div class="card amber lighten-5 registration">
                    <div class="card-content black-text">
                    <span class="card-title">Регистрация</span>
                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="name" 
                                           type="text" 
                                           class="validate"
                                           name = "name"
                                           onChange = {changeHandler}/>
                                    <label for="name">Имя</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="email" 
                                           type="email" 
                                           class="validate"
                                           name = "email"
                                           onChange = {changeHandler}/>
                                    <label for="email">Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="phone" 
                                           type="text" 
                                           class="validate"
                                           name = "phone"
                                           onChange = {changeHandler}/>
                                    <label for="phone">Телефон</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                <input id="password" 
                                       type="password"
                                       class="validate"
                                       onChange = {changeHandler}/>
                                <label for="password">Пароль</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                <input id="check_password" 
                                       type="password" 
                                       class="validate"
                                       name = "check_password"
                                       onChange = {changeHandler}/>
                                <label for="check_password">Подтверждение пароля</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                    <div class="card-action">
                        <button className="btn grey lighten-1 balck-text"
                                onClick = {registerHandler}
                                disabled = {loading}
                        >
                            Зарегистрироваться
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}