import {Avatar, Box, Button, Flex, Heading, HStack, Spacer, Stack, Text} from "@chakra-ui/react";

export default function FakeSellerCard() {
  return (
      <Flex bg="white" borderRadius="24px" width="100%" direction="column" p={6} gap={3}>
        <HStack>
          <Heading textStyle={{ base: "lg", md: "xl" }}>Top Admin</Heading>
          <Spacer />
          <Text textStyle={{ base: "sm", md: "md" }}>View all</Text>
        </HStack>
        <Flex gap={{ base: "5", md: "7" }}>
          <Stack gap={1}>
            <Box border="6px solid #EDF2F7" borderRadius="full">
              <Avatar.Root boxSize="100px">
                <Avatar.Fallback name="Carl Meadows"/>
                <Avatar.Image src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwZXJzb25hfGVufDB8fDB8fHww" />
              </Avatar.Root>
            </Box>
            <Stack gap={0} align="center">
              <Text fontWeight="medium" textStyle={{ base: "sm", md: "md" }}>Carl Meadows</Text>
              <Text color="fg.muted" textStyle={{ base: "xs", md: "sm" }}>Admin</Text>
            </Stack>
          </Stack>

          <Stack
            w="full"
            gap={3}
            justify="center"
          >
            <HStack
              bg="gray.100"
              borderRadius="xl"
              minH={14}
              align="center"
              justify="center"
              p={3}
            >
              <Text textStyle={{ base: "xs", md: "sm" }} color="gray.600">Notices Reviewed:</Text>
              <Text fontWeight="bold" textStyle={{ base: "md", md: "lg" }}>23,353</Text>
            </HStack>
            <Button fontSize={{ base: "sm", md: "md" }} fontWeight="bold" borderRadius="xl" bg="#6F6CF3" minH={14}>
              View Details
            </Button>
          </Stack>
        </Flex>
      </Flex>
  )
}