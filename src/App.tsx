import './App.css'
import {useState, useEffect} from 'react'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Reviews from './pages/Reviews'
import Login from './pages/Login'
import NoPage from './pages/NoPage'
import DashboardLayout from './components/DashboardLayout'
import {AuthWrapper} from './components/AuthWrapper'
import {AuthContext} from './components/context'
import {Provider} from "./components/ui/provider"

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('isAuthenticated') === "true"
  )

  useEffect(() => {
    localStorage.setItem("isAuthenticated", String(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <Provider>
      <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
        <Router>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
            <Route element={<AuthWrapper />}>
              <Route path="/dashboard" element={<DashboardLayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="reviews" element={<Reviews/>}/>
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    </Provider>
  )
}