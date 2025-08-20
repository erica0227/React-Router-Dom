import {Badge, Card, HStack, Text, Icon} from "@chakra-ui/react";
import {TbChartBar} from "react-icons/tb";
import {FaArrowUp} from "react-icons/fa6";

export default function TakedownsCard() {
  return (
    <Card.Root border="none" borderRadius="24px" display="flex" overflow="hidden">
      <Card.Header>
        <HStack>
          <Icon color="gray.600">
            <TbChartBar />
          </Icon>
          <Text fontSize="sm" color="gray.600">Number of Takedowns</Text>
        </HStack>
      </Card.Header>
      <Card.Body gap={4}>
        <HStack>
          <Card.Title fontSize="4xl">593568</Card.Title>
          <Badge colorPalette="green" borderRadius="full">
            <FaArrowUp />
            20.5%
          </Badge>
        </HStack>
        <Card.Description>October 2023</Card.Description>
      </Card.Body>
    </Card.Root>
  )
}