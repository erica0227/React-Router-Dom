import {useState} from "react";
import {
  Button,
  Field,
  Fieldset, Flex,
  Input,
  Stack,
} from "@chakra-ui/react"

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
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const isEmailInvalid = email.length < 6
  const isPasswordInvalid = password.length < 6

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()


    if (isEmailInvalid || isPasswordInvalid) {
      return
    }

    const newUser = { name: email, password }
    setUsers([...users, newUser])
    console.log("Added user:", newUser)
    onSignUp()
  }

  return(
    <Flex bg="white" borderRadius="24px" minW={{ base: "90%", md: "468px" }} direction="column" p={5} gap={5}>
      <form onSubmit={handleSignUp}>
        <Fieldset.Root as="form" size="lg" maxW="md">
          <Stack gap={3} alignItems="center">
            <Fieldset.Legend fontSize="3xl" fontWeight="bold">Sign up</Fieldset.Legend>
            <Fieldset.HelperText>
              Sign up a new account.
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            <Field.Root invalid={isEmailInvalid}>
              <Field.Label>Email</Field.Label>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {isEmailInvalid && (
                <Field.ErrorText>Email must be at least 6 characters</Field.ErrorText>
              )}
            </Field.Root>

            <Field.Root invalid={isPasswordInvalid}>
              <Field.Label>Password</Field.Label>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isPasswordInvalid && (
                <Field.ErrorText>Password must be at least 6 characters</Field.ErrorText>
              )}
            </Field.Root>
          </Fieldset.Content>

          <Button
            borderRadius="lg"
            type="submit"
            variant="solid"
            colorScheme="teal"
            bg="#6F6CF3"
          >
            Sign up
          </Button>
        </Fieldset.Root>
      </form>
    </Flex>
  )
}