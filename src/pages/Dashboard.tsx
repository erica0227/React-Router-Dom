import AnalyticsChart from "../components/dashboardCards/AnalyticsChart.tsx"
import TakedownsCard from "../components/dashboardCards/TakedownsCard.tsx";
import GoodsScrapedCard from "../components/dashboardCards/GoodsScrapedCard.tsx";
import NewNoticesCard from "../components/dashboardCards/NewNoticesCard.tsx";
import FakeSellerCard from "../components/dashboardCards/FakeSellerCard.tsx";
import NotificationCard from "../components/dashboardCards/NotificationCard.tsx";
import TopAdminCard from "../components/dashboardCards/TopAdminCard.tsx";
import {Box, Button, Flex, Grid, GridItem, HStack, Spacer, Stack, Text} from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Box>
      <Flex alignItems="center" pb={5} display={{ base: "none", md: "flex" }}>
        <Text>Wed, Oct 27</Text>
        <Spacer />
        <HStack>
          <Text textStyle="sm" color="gray.600">Choose Platform:</Text>
          <Button borderRadius="10px" size="sm" bg="white" color="#161819">Alibaba</Button>
          <Button borderRadius="10px" size="sm" bg="white" color="#161819">AliExpress</Button>
          <Button borderRadius="10px" size="sm" bg="#6F6CF3" >All</Button>
        </HStack>
      </Flex>

      <Stack gap={6}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }} gap={6} alignItems="stretch">
          <GridItem>
            <TakedownsCard/>
          </GridItem>
          <GridItem>
            <GoodsScrapedCard/>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 2, xl: 1 }}>
            <NewNoticesCard/>
          </GridItem>
        </Grid>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }} gap={6} alignItems="stretch">
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <AnalyticsChart/>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 2, xl: 1 }}>
            <FakeSellerCard/>
          </GridItem>
        </Grid>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }} gap={6}>
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <NotificationCard/>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 2, xl: 1 }}>
            <TopAdminCard/>
          </GridItem>
        </Grid>
      </Stack>
    </Box>
  )
}