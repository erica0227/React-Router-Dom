import {Avatar, Box, Button, Flex, Heading, HStack, Spacer, Stack, Text} from "@chakra-ui/react";

export default function FakeSellerCard() {
  return (
      <Flex bg="white" borderRadius="24px" width="100%" direction="column" p={5} gap={3}>
        <Flex>
          <Heading>Top Admin</Heading>
          <Spacer />
          <Text>View all</Text>
        </Flex>
        <Flex>
          <Stack gap={1}>
            <Box border="6px solid #EDF2F7" borderRadius="full">
              <Avatar.Root boxSize="100px">
                <Avatar.Fallback name="Carl Meadows"/>
                <Avatar.Image src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwZXJzb25hfGVufDB8fDB8fHww" />
              </Avatar.Root>
            </Box>
            <Stack gap={0} align="center">
              <Text fontWeight="medium">Carl Meadows</Text>
              <Text color="fg.muted" textStyle="sm">Admin</Text>
            </Stack>
          </Stack>
          <Spacer />
          <Stack
            minW="230px"
            gap={3}
            justify="center"
          >
            <HStack
              bg="gray.100"
              borderRadius="xl"
              minH={14}
              align="center"
              justify="center"
            >
              <Text color="gray.600">Notices Reviewed:</Text>
              <Text fontWeight="bold" textStyle="lg">23,353</Text>
            </HStack>
            <Button borderRadius="xl" minH={14}>
              View Details
            </Button>
          </Stack>
        </Flex>
      </Flex>
  )
}