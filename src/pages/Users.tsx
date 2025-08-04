import {useContext} from 'react'
import {AuthContext} from '../components/context.tsx'
import {Navigate} from "react-router-dom"

export default function Users() {
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
      <h2>User Page</h2>
      <button onClick={handleLogout}>log out</button>
    </div>
  );
}