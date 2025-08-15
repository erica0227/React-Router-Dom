import {SimpleGrid, Text, Card, Button, Spacer, Image, Box, Flex} from "@chakra-ui/react"

export default function Grid() {
  const productData = [
    {
      "id": 1,
      "title": "Product title goes here",
      "description": "https://yourproducturlgoeshere1122.com",
      "status": "Status",
      "img": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
      "id": 2,
      "title": "Product title goes here",
      "description": "https://yourproducturlgoeshere1122.com",
      "status": "Status",
      "img": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
      "id": 3,
      "title": "Product title goes here",
      "description": "https://yourproducturlgoeshere1122.com",
      "status": "Status",
      "img": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
      "id": 4,
      "title": "Product title goes here",
      "description": "https://yourproducturlgoeshere1122.com",
      "status": "Status",
      "img": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
  ];

  return (
    <Box>
      <Text>Product List</Text>
      <SimpleGrid gap={6} minChildWidth="17.25rem">
        {productData.map(product => (
          <Card.Root key={product.id} border="none" borderRadius="24px">
            <Image
              src={product.img}
              alt={product.title}
              borderRadius="20px"
              margin="16px"
            />

            <Card.Body gap={2}>
              <Card.Title>{product.title}</Card.Title>
              <Card.Description>{product.description}</Card.Description>
            </Card.Body>

            <Card.Footer>
              <Flex w="100%" align="flex-end">
                <Button bg="#6F6CF3" size="sm" borderRadius="10px">View Details</Button>
                <Spacer />
                <Button bg="#161819" size="2xs" borderRadius="10px">Source</Button>
              </Flex>
            </Card.Footer>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Box>
  );
}