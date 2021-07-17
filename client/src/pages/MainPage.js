import React from 'react'

export const MainPage = () => {
    return(
        <body>
            <header>
                <nav>
                    <div class="nav-wrapper">
                    <a href="#" class="brand-logo center">Сведения о пользователе</a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a href="#">Выход</a></li>
                    </ul>   
                    </div>
                </nav>
            </header>
            <main>
                <div class="card-panel grey lighten-5">
                    <h3></h3>
                    <form>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="name" 
                                   type="text" 
                                   class="validate"
                                   name = "name"
                            />
                            <label for="name">Имя</label>
                        </div>
                    </div>
                    <div class="row">
                                <div class="input-field col s12">
                                <input id = "date_birth"
                                       type="text" 
                                       class="datepicker"
                                       name = "data_birth"
                                       ></input>
                                <label for="date_birth">Дата рождения</label>
                                </div>
                            </div> 
                    <div class="row">
                                <div class="input-field col s12">
                                    <input id="email" 
                                           type="email" 
                                           class="validate"
                                           name = "email"
                                           />
                                    <label for="email">Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="phone" 
                                           type="text" 
                                           class="validate"
                                           name = "phone"
                                           />
                                    <label for="phone">Телефон</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                <input id="password" 
                                       type="password"
                                       class="validate"
                                       />
                                <label for="password">Пароль</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                <input id="check_password" 
                                       type="password" 
                                       class="validate"
                                       name = "check_password"
                                       />
                                <label for="check_password">Подтверждение пароля</label>
                                </div>
                            </div> 
                    </form>
                </div>
            </main>                    
                <footer class="page-footer z-depth-2">
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
                    © 2021 Copyright Maryana
                    <a class="grey-text text-lighten-4 right" href="#">Выход</a>
                    </div>
                </div>
            </footer>
        </body>
    )
}