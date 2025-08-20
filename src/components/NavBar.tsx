import {Flex, Heading, VStack, Text, Spacer, HStack, Avatar} from "@chakra-ui/react"
import SearchBar from "./SearchBar";
import {useContext} from "react"
import {NavContext} from "../context/NavContext"

export default function NavBar() {
  const {pageTitle} = useContext(NavContext)

  return (
    <Flex
      as="nav"
      alignItems="center"
      py={2}
      gap={6}
    >
      <Heading size="3xl">{pageTitle}</Heading>
      <Spacer/>

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