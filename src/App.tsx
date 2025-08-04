import './App.css'
import {useState} from 'react'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Login from './pages/Login'
import NoPage from './pages/NoPage'
import {AuthWrapper} from './components/AuthWrapper'
import {AuthContext} from './components/context'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
          <Route element={<AuthWrapper />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
          </Route>
        </Routes>
      </Router>
    </AuthContext.Provider>
  )
}