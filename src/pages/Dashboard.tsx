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
      <Flex alignItems="center" py={5}>
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
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem>
            <TakedownsCard/>
          </GridItem>
          <GridItem>
            <GoodsScrapedCard/>
          </GridItem>
          <GridItem>
            <NewNoticesCard/>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem colSpan={2}>
            <AnalyticsChart/>
          </GridItem>
          <GridItem colSpan={1}>
            <FakeSellerCard/>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem colSpan={2}>
            <NotificationCard/>
          </GridItem>
          <GridItem colSpan={1}>
            <TopAdminCard/>
          </GridItem>
        </Grid>
      </Stack>
    </Box>
  )
}