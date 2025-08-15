import {useContext} from 'react'
import {AuthContext} from '../components/Context.tsx'
import {Navigate, Outlet} from "react-router-dom"
import {Heading} from "@chakra-ui/react"

export default function Dashboard() {
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)

  const handleLogout = () => {
    console.log('User logged out')
    setIsAuthenticated(false)
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return (
    <div>
      <Heading>Dashboard Page</Heading>
      <button onClick={handleLogout}>log out</button>
      <Outlet/>
    </div>
  );
}