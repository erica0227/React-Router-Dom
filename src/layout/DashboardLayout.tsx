import {Outlet} from "react-router-dom"
import SideBar from "../components/SideBar.tsx"
import NavBar from "../components/NavBar"
import {Grid, GridItem} from "@chakra-ui/react"

export default function DashboardLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="#F6F6F8">
      <GridItem
        as="aside"
        colSpan={1}
        minHeight="100vh"
        bg="white"
        p={{base: "20px", lg: "30px"}}
      >
        <SideBar />
      </GridItem>
      <GridItem
        as="main"
        colSpan={5}
        p="24px"
      >
        <NavBar/>
        <Outlet/>
      </GridItem>
    </Grid>
  )
}
