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



  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getAuth = async () => {
      try {
        const resp = await axios.get('/auth/login/success')
        setError(null)
        setUser(resp.data.user._json)
      } catch (error) {
        setError(error.response.data.message)
        setUser(null)
      }
    }
    getAuth()
  }
    , [])


  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    const isAdminCheck = async () => {
      try {
        const resp = await axios.get('/auth/admin/')
        if (resp.data.admin === true) {
          setAdmin(true)
          return
        } else {
          setAdmin(false)
          return
        }
      } catch (error) {
        setAdmin(false)
        return
      }
    }
    isAdminCheck()
  }, [])

  return (
    <>
      <Router>
        <NavBar handleLogout={handleLogout} user={user} admin={admin} />
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
                : <LoginPage handleLogin={handleLogin} error={error} />
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
