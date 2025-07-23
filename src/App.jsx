import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Users from './pages/Users.jsx'
import Login from './pages/Login.jsx'
import NoPage from './pages/NoPage.jsx'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<Users />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  )
}