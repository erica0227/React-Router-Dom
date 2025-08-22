import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import {Flex, Text, Heading, HStack, Box, Circle, useBreakpointValue} from "@chakra-ui/react";

const analyticsData = [
  { month: "Jan", listingsRemoved: 5000, noticesSent: 6000, noticesRejected: 1000 },
  { month: "Feb", listingsRemoved: 4500, noticesSent: 5000, noticesRejected: 800 },
  { month: "Mar", listingsRemoved: 4700, noticesSent: 5200, noticesRejected: 900 },
  { month: "Apr", listingsRemoved: 3600, noticesSent: 4300, noticesRejected: 870 },
  { month: "May", listingsRemoved: 4200, noticesSent: 4700, noticesRejected: 600 },
  { month: "Jun", listingsRemoved: 4800, noticesSent: 5400, noticesRejected: 550 },
  { month: "Jul", listingsRemoved: 5100, noticesSent: 5900, noticesRejected: 720 },
  { month: "Aug", listingsRemoved: 5800, noticesSent: 6000, noticesRejected: 400 },
  { month: "Sep", listingsRemoved: 5500, noticesSent: 5600, noticesRejected: 300 },
  { month: "Oct", listingsRemoved: 4800, noticesSent: 4700, noticesRejected: 320 },
  { month: "Nov", listingsRemoved: 4600, noticesSent: 4800, noticesRejected: 290 },
  { month: "Dec", listingsRemoved: 4500, noticesSent: 4600, noticesRejected: 310 },
];

export default function AnalyticsChart() {

  return (
    <Flex
      bg="white"
      borderRadius="24px"
      width="100%"
      height="100%"
      direction="column"
      p={{ base: "1", md: "3" }}
    >
      <Flex p={3} px={5} direction={{ base: "column", md: "row" }} gap={{ base: "1", md: "0" }} justify="space-between">
        <Heading textStyle={{ base: "lg", md: "xl" }}>
          Analytics
        </Heading>

        <HStack gap={{ base: 1, md: 2, lg: 6 }}>
          <HStack>
            <Circle size={{ base: "12px", md: "15px" }} bg="#D7F0FC" />
            <Text textStyle={{ base: "xs", md: "sm" }}>Listings Removed</Text>
          </HStack>
          <HStack>
            <Circle size={{ base: "12px", md: "15px" }} bg="#CDEFD9" />
            <Text textStyle={{ base: "xs", md: "sm" }}>Notices Sent</Text>
          </HStack>
          <HStack>
            <Circle size={{ base: "12px", md: "15px" }} bg="#FEA4A3" />
            <Text textStyle={{ base: "xs", md: "sm" }}>Notices Rejected</Text>
          </HStack>
        </HStack>
      </Flex>
      <Box flex="1" minH="190px" maxH="400px" pr={5}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={800}
            height={300}
            data={analyticsData}
          >
            <CartesianGrid strokeDasharray="10 5" vertical={false} stroke="#E2E8F0"/>
            <XAxis
              dataKey="month"
              axisLine={{stroke: "#E2E8F0"}}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
            />
            <Tooltip cursor={{fill: "transparent"}}/>
            <Bar dataKey="listingsRemoved" fill="#D7F0FC" barSize={useBreakpointValue({ base: 3, md: 8 })}/>
            <Bar dataKey="noticesSent" fill="#CDEFD9" barSize={useBreakpointValue({ base: 3, md: 8 })}/>
            <Bar dataKey="noticesRejected" fill="#FEA4A3" barSize={useBreakpointValue({ base: 3, md: 8 })}/>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Flex>
  );
}
