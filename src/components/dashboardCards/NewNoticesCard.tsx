import {Card, HStack, Text, Icon, Flex} from "@chakra-ui/react";
import {TbMessage2} from "react-icons/tb";
import NoticeChart from "./NoticeChart";

export default function TakedownsCard() {
  return (
    <Card.Root
      border="none"
      borderRadius="24px"
      overflow="hidden"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyItems="center"
      height="full"
      minW="full"
    >
      <Flex direction="column" gap={{ base: 0, md: 2 }}>
        <Card.Header>
          <HStack>
            <Icon color="gray.600" boxSize={{ base: 3, md: 4 }}>
              <TbMessage2 />
            </Icon>
            <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" whiteSpace="nowrap">New Notices</Text>
          </HStack>
        </Card.Header>

        <Card.Body gap={{ base: 2, md: 4 }}>
          <Card.Title fontSize={{ base: "3xl", md: "4xl" }}>2395</Card.Title>
          <Card.Description fontSize={{ base: "xs", md: "sm" }}>October 2023</Card.Description>
        </Card.Body>
      </Flex>
      <Flex width="100%" height={100} pr={6}>
        <NoticeChart />
      </Flex>
    </Card.Root>
  )
}