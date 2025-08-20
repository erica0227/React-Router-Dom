import {SimpleGrid, Text, Card, Button, Spacer, Avatar, Box, Flex, HStack, Stack, Badge} from "@chakra-ui/react"

export default function Reviews() {
  const userData = [
    {
      id: 1,
      name: "Marion",
      email: "marion@example.com",
      status: "Offline",
      company: "Nexus Tech",
      img: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
    },
    {
      id: 2,
      name: "Luigi",
      email: "luigi@example.com",
      status: "Offline",
      company: "Code Spark",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 3,
      name: "Princess Peach",
      email: "peach@example.com",
      status: "Active",
      company: "Dstream",
      img: "https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg"
    },
    {
      id: 4,
      name: "Toad",
      email: "toad@example.com",
      status: "Offline",
      company: "Inno Lab",
      img: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  return (
    <Box>
      <Flex alignItems="center" py={5}>
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
            flexDirection="row"
            alignItems="center"
            overflow="hidden"
          >
            <Card.Body>
              <HStack key={user.email} gap={5}>
                <Avatar.Root shape="rounded" size="2xl">
                  <Avatar.Fallback name={user.name} />
                  <Avatar.Image src={user.img} />
                </Avatar.Root>
                <Stack gap={1}>
                  <HStack>
                    <Card.Title>{user.name}</Card.Title>
                    <Badge colorPalette="purple">{user.company}</Badge>
                  </HStack>
                  <Card.Description>{user.email}</Card.Description>
                </Stack>
                <Badge ml={5} colorPalette={user.status === "Active" ? "green" : "red"}>
                  {user.status}
                </Badge>
              </HStack>
            </Card.Body>

            <HStack align="flex-end" gap={3} mr={5}>
              <Button>Details</Button>
              <Button bg="#6F6CF3">Remove</Button>
            </HStack>

          </Card.Root>
        ))}
      </SimpleGrid>
    </Box>
  );
}