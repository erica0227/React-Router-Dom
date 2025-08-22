import {Outlet} from "react-router-dom"
import SideBar from "../components/layout/SideBar.tsx"
import NavBar from "../components/layout/NavBar.tsx"
import {Grid, GridItem} from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="#F6F6F8">
      <GridItem
        as="aside"
        colSpan={{base: 6, md: 1 }}
        bg="white"
        p={{base: "20px", md: "30px"}}
        position={{ base: "static", md: "sticky" }}
        top="0"
        height={{base: "auto", md: "100vh"}}
      >
        <SideBar />
      </GridItem>
      <GridItem
        as="main"
        colSpan={{base: 6, md: 5 }}
        p="24px"
      >
        <NavBar/>
        <Outlet/>
      </GridItem>
    </Grid>
  )
}
