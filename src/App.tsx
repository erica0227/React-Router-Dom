import './App.css'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Grid from './pages/Grid.tsx'
import Login from './pages/Login'
import NoPage from './pages/NoPage'
import DashboardLayout from './layout/DashboardLayout.tsx'
import {AuthWrapper} from './components/AuthWrapper'
import {AuthContext} from './components/Context.tsx'
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
                <Route path="reviews" element={<Grid/>}/>
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    </Provider>
  )
}