import {Badge, Card, HStack, Text, Icon} from "@chakra-ui/react";
import {BiCoinStack} from "react-icons/bi";
import {FaArrowUp} from "react-icons/fa6";

export default function TakedownCard() {
  return (
    <Card.Root
      border="none"
      borderRadius="24px"
      display="flex"
      overflow="hidden"
      height="full"
      width="full"
      gap={{ base: 0, md: 2 }}
    >
      <Card.Header>
        <HStack>
          <Icon color="gray.600" boxSize={{ base: 3, md: 4 }}>
            <BiCoinStack />
          </Icon>
          <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">% of Goods Scraped</Text>
        </HStack>
      </Card.Header>

      <Card.Body gap={{ base: 2, md: 4 }}>
        <HStack>
          <Card.Title fontSize={{ base: "3xl", md: "4xl" }}>92.85%</Card.Title>
          <Badge colorPalette="green" borderRadius="full">
            <FaArrowUp />
            20.5%
          </Badge>
        </HStack>
        <Card.Description fontSize={{ base: "xs", md: "sm" }}>October 2023</Card.Description>
      </Card.Body>
    </Card.Root>
  )
}