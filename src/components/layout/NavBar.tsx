import {Flex, Heading, VStack, Text, Spacer, HStack, Avatar} from "@chakra-ui/react"
import SearchBar from "./SearchBar.tsx";
import {useContext} from "react"
import {NavContext} from "../../context/NavContext.tsx"

export default function NavBar() {
  const {pageTitle} = useContext(NavContext)

  return (
    <Flex
      as="nav"
      alignItems="center"
      pt={2}
      pb={8}
      gap={8}
    >
      <Heading
        size="3xl"
        display={{ base: "none", md: "block"}}
      >
        {pageTitle}
      </Heading>

      <Spacer display={{ base: "none", md: "block"}}/>

      <SearchBar />
      <HStack>
        <Avatar.Root>
          <Avatar.Fallback name="John Smith" />
          <Avatar.Image src="https://play-lh.googleusercontent.com/5LIMaa7WTNy34bzdFhBETa2MRj7mFJZWb8gCn_uyxQkUvFx_uOFCeQjcK16c6WpBA3E" />
        </Avatar.Root>
        <VStack
          display={{base: 'none', md: 'flex'}}
          alignItems="flex-start"
          gap="1px"
        >
          <Text>John Smith</Text>
          <Text fontSize="sm" color="gray.500">
            Admin
          </Text>
        </VStack>
      </HStack>
    </Flex>
  )
}