import {useContext} from "react";
import {Navigate, Outlet} from "react-router-dom";
import {AuthContext} from "./context";

export function AuthWrapper() {
  const {isAuthenticated} = useContext(AuthContext)

  if (!isAuthenticated) {
    console.log('User not authenticated, redirecting to login')
    return <Navigate to="/login" />
  }

  console.log('User authenticated, rendering children')
  return <Outlet />
}