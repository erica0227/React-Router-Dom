import {Avatar, Flex, Heading, Spacer, Stack, Text} from "@chakra-ui/react";

const fakeSellers = [
  {
    id: 1,
    name: "Rose Meadows",
    company: "Fake Inc.",
    listing: "2464",
    avatar: "/avatars/rose.png"
  },
  {
    id: 2,
    name: "Madden Esparza",
    company: "Red Flag Co.",
    listing: "6345",
    avatar: "/avatars/madden.png"
  },
  {
    id: 3,
    name: "Edison Norman",
    company: "Ghost Deals Ltd.",
    listing: "9815",
    avatar: "/avatars/edison.png"
  },
  {
    id: 4,
    name: "Terrance Conner",
    company: "ScamBay",
    listing: "9245",
    avatar: "/avatars/terrance.png"
  },
  {
    id: 5,
    name: "Curtis Valentine",
    company: "CloneMart",
    listing: "2390",
    avatar: "/avatars/curtis.png"
  },
];

const colorPalette = ["gray", "red", "green", "blue", "teal", "pink", "purple", "cyan", "orange", "yellow"];

const pickPalette = () => {
  const randomIndex = Math.floor(Math.random() * colorPalette.length);
  return colorPalette[randomIndex];
}

export default function FakeSellerCard() {
  return (
    <Flex bg="white" borderRadius="24px" width="100%" height={330} direction="column" p={5} gap={3}>
      <Flex>
        <Heading>Top 5 Fake Sellers</Heading>
        <Spacer />
        <Text>View all</Text>
      </Flex>
      <Stack>
        {fakeSellers.map(seller => (
          <Flex key={seller.id} gap={3} alignItems="center" justifyContent="space-between">
              <Avatar.Root borderRadius="xl" colorPalette={pickPalette()}>
                <Avatar.Fallback/>
                <Avatar.Image src={seller.avatar} />
              </Avatar.Root>
              <Stack gap="0">
                <Text fontWeight="medium">{seller.name}</Text>
                <Text color="fg.muted" textStyle="sm">
                  {seller.company}
                </Text>
              </Stack>
              <Spacer />
              <Text color="gray.600">Listing #{seller.listing}</Text>
          </Flex>
        ))}

      </Stack>
    </Flex>
  )
}