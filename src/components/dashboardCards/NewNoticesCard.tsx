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
    >
      <Flex direction="column">
        <Card.Header>
          <HStack>
            <Icon color="gray.600">
              <TbMessage2 />
            </Icon>
            <Text fontSize="sm" color="gray.600">New Notices</Text>
          </HStack>
        </Card.Header>

        <Card.Body gap={4}>
          <Card.Title fontSize="4xl">2395</Card.Title>
          <Card.Description>October 2023</Card.Description>
        </Card.Body>
      </Flex>
      <Flex width="50%" height="100px">
        <NoticeChart />
      </Flex>
    </Card.Root>
  )
}