import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext.tsx";
import {Flex, Button, Field, Fieldset, Input, Stack} from "@chakra-ui/react";

type User = {
  name: string
  password: string
}

export default function LoginForm({ users }: { users: User[] }) {
  const {setIsAuthenticated} = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const foundUser = users.find(
      (user) => user.name === email && user.password === password
    )

    if (foundUser) {
      setIsAuthenticated(true)
      console.log("User logged in:", foundUser)
    } else {
      alert("User not found or wrong password")
    }
  }

  return(
    <Flex bg="white" borderRadius="24px" minW={{ base: "90%", md: "468px" }} direction="column" p={5} gap={5}>
      <form onSubmit={handleLogin}>
        <Fieldset.Root as="form" size="lg" maxW="md">
          <Stack gap={3} alignItems="center">
            <Fieldset.Legend fontSize="3xl" fontWeight="bold">Log in</Fieldset.Legend>
            <Fieldset.HelperText>
              Log in your account here.
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Field.Root>

            <Field.Root>
              <Field.Label>Password</Field.Label>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Fieldset.HelperText textAlign="right" w="100%">
                forgot password?
              </Fieldset.HelperText>
            </Field.Root>
          </Fieldset.Content>

          <Button
            borderRadius="lg"
            type="submit"
            variant="solid"
            colorScheme="teal"
            bg="#6F6CF3"
          >
            Log in
          </Button>
        </Fieldset.Root>
      </form>
    </Flex>
  )
}