import {Flex, Heading, HStack, Spacer, Stack, StackSeparator, Text} from "@chakra-ui/react";

const notifications = [
  {
    id: 1,
    title: "Mademoiselle 3.4fl.oz 100 ml perfume, CHANEL",
    url: "https://yourproducturlgoeshere1122.com",
    timeAgo: "1 min ago",
  },
  {
    id: 2,
    title: "Cigarettes Crush balls Aroma, BLUE",
    url: "https://yourproducturlgoeshere1122.com",
    timeAgo: "2 mins ago",
  },
  {
    id: 3,
    title: "Pokémon Enamel Pins Lot you can choose from",
    url: "https://yourproducturlgoeshere1122.com",
    timeAgo: "2 mins ago",
  },
  {
    id: 4,
    title: "4 PCS Herb Tobacco Spice Grinder, COMBAT",
    url: "https://yourproducturlgoeshere1122.com",
    timeAgo: "2 mins ago",
  },
];

export default function FakeSellerCard() {
  return (
    <Flex bg="white" borderRadius="24px" width="100%" direction="column" p={5} gap={5}>
      <Flex>
        <Heading>Notifications of Take Downs</Heading>
        <Spacer />
        <Text>View all</Text>
      </Flex>
      <Stack separator={<StackSeparator />} gap={3}>
        {notifications.map(item => (
          <Flex key={item.id} gap={3} alignItems="center" justifyContent="space-between">
            <HStack>
              <Text>{item.title}</Text>
              <Text textStyle="sm" color="gray.500">{item.url}</Text>
            </HStack>
            <Spacer />
            <Text textStyle="sm" color="gray.500">{item.timeAgo}</Text>
          </Flex>
        ))}

      </Stack>
    </Flex>
  )
}