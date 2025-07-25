import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Login from './pages/Login'
import NoPage from './pages/NoPage'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  )
}