import {Flex, Heading, Box, Text, Spacer, HStack} from "@chakra-ui/react"

export default function NavBar() {
  return (
    <Flex
      as="nav"
      alignItems="center"
    >
      <Heading size="3xl">Reviews</Heading>
      <Spacer/>

      <HStack>
        <Box bg="lightgrey" p="10px">M</Box>
        <Text>John Smith</Text>
      </HStack>
    </Flex>
  )
}