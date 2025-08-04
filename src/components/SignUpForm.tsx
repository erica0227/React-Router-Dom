import {useContext} from "react";
import {AuthContext} from "./context";

export default function SignUpForm({onSignUp}: {onSignUp: () => void}) {
  const {setIsAuthenticated} = useContext(AuthContext)

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsAuthenticated(true)
    console.log('User logged in')
    onSignUp()
  }

  return(
    <>
      <h2>Sign up</h2>
      <form onSubmit={handleSignUp}>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" >Sign up</button>
      </form>
    </>
  )
}