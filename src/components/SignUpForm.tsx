import {useContext} from "react";
import {AuthContext} from "../context/AuthContext.tsx";

type User = {
  name: string
  password: string
}

type SignUpFormProps = {
  onSignUp: () => void
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

export default function SignUpForm({onSignUp, users, setUsers}: SignUpFormProps) {
  const {setIsAuthenticated} = useContext(AuthContext)

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsAuthenticated(true)
    setUsers([...users])
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