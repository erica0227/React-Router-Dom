import {SimpleGrid, Text, Card, Button, Spacer, Image, Box, Flex, HStack} from "@chakra-ui/react"

export default function Reviews() {
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
      "img": "https://www.adobe.com/creativecloud/photography/type/media_1edd1c2b865853b2b14c35c715ab6798c2fb2bfd4.jpg?width=2000&format=webply&optimize=medium"
    },
    {
      "id": 3,
      "title": "Product title goes here",
      "description": "https://yourproducturlgoeshere1122.com",
      "status": "Status",
      "img": "https://cdn.shopify.com/s/files/1/0657/8569/2375/files/Cosmetic-Skincare-Product-photo-Table-top-setup.jpg?v=1681840139"
    },
    {
      "id": 4,
      "title": "Product title goes here",
      "description": "https://yourproducturlgoeshere1122.com",
      "status": "Status",
      "img": "https://m.media-amazon.com/images/I/51F5sDCCeQL.jpg"
    },
  ];

  return (
    <Box>
      <Flex alignItems="center" py={5}>
        <Text>Product List</Text>
        <Spacer />
        <HStack>
          <Button borderRadius="10px" size="sm">Grid View</Button>
          <Button borderRadius="10px" size="sm" bg="white" color="#161819">List View</Button>
        </HStack>
      </Flex>

      <SimpleGrid gap={6} minChildWidth="17.25rem">
        {productData.map(product => (
          <Card.Root
            key={product.id}
            border="none"
            borderRadius="24px"
            overflow="hidden"
          >

            <Image
              src={product.img}
              alt={product.title}
              fit="cover"
              aspectRatio={1}
              h="100%"
              borderRadius="20px"
              mt={4} ml={4} mr={4}
            />

            <Card.Body gap={1}>
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