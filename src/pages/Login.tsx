import LoginForm from '../components/forms/LoginForm.tsx'
import SignUpForm from '../components/forms/SignUpForm.tsx'
import {AuthContext} from '../context/AuthContext.tsx'
import {useState, useContext} from 'react'
import {Navigate} from "react-router-dom"
import {Flex, Button, Text} from "@chakra-ui/react";

type User = {
  name: string
  password: string
}

export default function Login() {
  const [showForm, setShowForm] = useState(false)
  const {isAuthenticated} = useContext(AuthContext)
  const [users, setUsers] = useState<User[]>([]);

  const handleSignUp = () => {
    setShowForm(false)
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="#F6F6F8"
      justifyContent="center"
      alignItems="center"
    >
      {showForm ?
        <SignUpForm onSignUp={handleSignUp}  users={users} setUsers={setUsers}/>
        :
        <>
          <LoginForm users={users} />
          <Flex m={5} gap={3}>
            <Text>New to us?</Text>
            <Button unstyled fontWeight="bold" color="#6F6CF3" onClick={() => setShowForm(true)}>Sign up</Button>
          </Flex>
        </>
      }
    </Flex>
  )
}