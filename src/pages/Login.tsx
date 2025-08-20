import LoginForm from '../components/LoginForm.tsx'
import SignUpForm from '../components/SignUpForm.tsx'
import {AuthContext} from '../context/AuthContext.tsx'
import {useState, useContext} from 'react'
import {Navigate} from "react-router-dom"

export default function Login() {
  const [showForm, setShowForm] = useState(false)
  const {isAuthenticated} = useContext(AuthContext)

  const handleSignUp = () => {
    setShowForm(false)
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const [users, setUsers] = useState([]);

  return (
    <>
      {showForm ?
        <SignUpForm onSignUp={handleSignUp}  users={users} setUsers={setUsers}/>
        :
        <>
          <h2>Login Page</h2>
          <LoginForm users={users} />
          <button onClick={() => setShowForm(true)}>Sign up</button>
        </>
      }
    </>
  )
}