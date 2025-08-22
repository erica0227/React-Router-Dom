import {
  SimpleGrid,
  Text,
  Card,
  Button,
  Spacer,
  Avatar,
  Box,
  Flex,
  HStack,
  Stack,
  Badge,
  Float,
  Circle
} from "@chakra-ui/react"

export default function Reviews() {
  const userData = [
    {
      id: 1,
      name: "Marion",
      email: "marion@youremailgoeshere1122.com",
      status: "Offline",
      company: "Nexus Tech",
      img: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
    },
    {
      id: 2,
      name: "Luigi",
      email: "marion@youremailgoeshere1122.com",
      status: "Offline",
      company: "Code Spark",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 3,
      name: "Princess",
      email: "marion@youremailgoeshere1122.com",
      status: "Active",
      company: "Dstream",
      img: "https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg"
    },
    {
      id: 4,
      name: "Toad",
      email: "marion@youremailgoeshere1122.com",
      status: "Offline",
      company: "Inno Lab",
      img: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  return (
    <Box>
      <Flex alignItems="center" pb={5} display={{ base: "none", md: "flex" }}>
        <Text>User List</Text>
        <Spacer />
        <HStack>
          <Button borderRadius="10px" size="sm" bg="white" color="#161819">Grid View</Button>
          <Button borderRadius="10px" size="sm">List View</Button>
        </HStack>
      </Flex>

      <SimpleGrid gap={6}>
        {userData.map(user => (
          <Card.Root
            key={user.id}
            border="none"
            borderRadius="16px"
            overflow="hidden"
          >
            <Card.Body
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
              justifyContent="space-between"
              gap={5}
            >
              <HStack gap={8}>
                <HStack
                  key={user.email}
                  gap={6}
                >
                  <Avatar.Root shape="rounded" boxSize="68px">
                    <Avatar.Fallback name={user.name} />
                    <Avatar.Image src={user.img} />
                    <Float placement="bottom-end" offsetX="1" offsetY="1" display={{ base: "block", md: "none" }}>
                      <Circle
                        bg={user.status === "Active" ? "green.500" : "red.500"}
                        size="8px"
                        outline="0.2em solid"
                        outlineColor="bg"
                      />
                    </Float>
                  </Avatar.Root>

                  <Stack gap={1}>
                    <HStack>
                      <Card.Title>{user.name}</Card.Title>
                      <Badge size="md">{user.company}</Badge>
                    </HStack>
                    <Card.Description
                      whiteSpace="normal"
                      wordBreak="break-word"
                    >
                      {user.email}
                    </Card.Description>
                  </Stack>
                </HStack>

                <Badge size="lg" borderRadius="lg" colorPalette={user.status === "Active" ? "green" : "red"} display={{ base: "none", md: "inline-flex" }}>
                  {user.status}
                </Badge>
              </HStack>

              <HStack gap={3} mr={{ base: "0", md: "2" }} justifyContent="flex-end">
                <Button borderRadius="lg">Details</Button>
                <Button bg="#6F6CF3" borderRadius="lg">Remove</Button>
              </HStack>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Box>
  );
}