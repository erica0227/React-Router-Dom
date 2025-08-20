import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import {Flex, Text, Spacer, Heading, HStack, Box} from "@chakra-ui/react";

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
    <Flex bg="white" borderRadius="24px" width="100%" height={330} direction="column" p={3}>
      <Flex p={4}>
        <Heading>
          Analytics
        </Heading>
        <Spacer />
        <HStack>
          <HStack>
            <Box
              w="15px"
              h="15px"
              bg="#D7F0FC"
              borderRadius="full"
            />
            <Text textStyle="sm">Listings Removed</Text>
          </HStack>
          <HStack>
            <Box
              w="15px"
              h="15px"
              bg="#CDEFD9"
              borderRadius="full"
            />
            <Text textStyle="sm">Notices Sent</Text>
          </HStack>
          <HStack>
            <Box
              w="15px"
              h="15px"
              bg="#FEA4A3"
              borderRadius="full"
            />
            <Text textStyle="sm">Notices Rejected</Text>
          </HStack>
        </HStack>
      </Flex>
      <ResponsiveContainer width="98%" height="100%">
        <BarChart
          width={800}
          height={300}
          data={analyticsData}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip cursor={{fill: "transparent"}}/>
          <Bar dataKey="listingsRemoved" fill="#D7F0FC" />
          <Bar dataKey="noticesSent" fill="#CDEFD9" />
          <Bar dataKey="noticesRejected" fill="#FEA4A3" />
        </BarChart>
      </ResponsiveContainer>
    </Flex>
  );
}
