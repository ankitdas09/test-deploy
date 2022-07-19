import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

import axios from 'axios'
import NavBar from './components/NavBar'
import { handleLogin, handleLogout, isAdminCheck } from './api'
import AdminPage from './pages/AdminPage'

axios.defaults.withCredentials = true

function App() {

  const getAuth = async () => {
    try {
      const resp = await axios.get('/auth/login/success')
      setUser(resp.data.user._json)
    } catch (error) {
      setUser(null)
    }
  }

  const [user, setUser] = useState(null)
  useEffect(() => async () => getAuth()
    , [])


  const [admin, setAdmin] = useState(false)

  useEffect(() => async () => {
    const resp = await isAdminCheck()
    setAdmin(resp)
  }, [])

  return (
    <>
      <NavBar handleLogout={handleLogout} user={user} admin={admin} />
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              user ?
                <HomePage user={user} admin={admin} />
                : <Navigate to='/login' />
            }
          />
          <Route
            path='/login'
            element={
              user ?
                <Navigate to='/' />
                : <LoginPage handleLogin={handleLogin} />
            }
          />
          <Route
            path='/adminpanel'
            element={
              !(user && admin) ?
                <Navigate to='/' />
                : <AdminPage user={user} />
            }
          />
          <Route
            path='*'
            element={
              <h2 className='text-center'>404 Page Not Found</h2>
            }
          />
        </Routes>
      </Router>

    </>
  );
}

export default App;
