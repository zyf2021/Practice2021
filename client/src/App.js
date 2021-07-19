import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { useRoutes } from './routes';
import 'materialize-css'
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';
import {Navbar} from './components/Navbar'
import { Footer } from './components/Footer';


function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
      { isAuthenticated && <Navbar /> }
      <div className="container">
        {routes}
      </div>
      { isAuthenticated && <Footer /> }
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
