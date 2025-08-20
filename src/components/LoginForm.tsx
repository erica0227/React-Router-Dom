import {useContext} from "react";
import {AuthContext} from "../context/AuthContext.tsx";

export default function LoginForm() {
  const {setIsAuthenticated} = useContext(AuthContext)

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsAuthenticated(true)
    console.log('User logged in')
  }

  return(
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Log in</button>
    </form>
  )
}