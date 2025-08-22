import './App.css'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Reviews from './pages/Reviews.tsx'
import Login from './pages/Login'
import NoPage from './pages/NoPage'
import RootLayout from './layout/RootLayout.tsx'
import {AuthWrapper} from './components/ui/AuthWrapper.tsx'
import {AuthContext} from './context/AuthContext.tsx'
import {NavContext} from "./context/NavContext";
import {Provider} from "./components/ui/provider"
import UserList from "./pages/UserList.tsx";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    localStorage.getItem('isAuthenticated') === "true"
  )

  useEffect(() => {
    localStorage.setItem("isAuthenticated", String(isAuthenticated));
  }, [isAuthenticated]);

  const [pageTitle, setPageTitle] = useState(() =>
    localStorage.getItem("pageTitle") || "Dashboard"
  );

  useEffect(() => {
    localStorage.setItem("pageTitle", pageTitle);
  }, [pageTitle]);

  return (
    <Provider>
      <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
        <NavContext.Provider value={{pageTitle, setPageTitle}}>
          <Router>
            <Routes>
              <Route index element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NoPage />} />
              <Route element={<AuthWrapper />}>
                <Route path="/" element={<RootLayout/>}>
                  <Route path="dashboard" element={<Dashboard/>}/>
                  <Route path="reviews" element={<Reviews/>}/>
                  <Route path="users" element={<UserList/>}/>
                </Route>
              </Route>
            </Routes>
          </Router>
        </NavContext.Provider>
      </AuthContext.Provider>
    </Provider>
  )
}