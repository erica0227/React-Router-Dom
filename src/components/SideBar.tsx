import {Stack, HStack, Icon, Flex, Text, Button, Spacer} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import {RiHome5Fill, RiSettingsFill} from "react-icons/ri";
import {useContext} from 'react'
import {AuthContext} from '../context/AuthContext.tsx'
import {NavContext} from "../context/NavContext"
import {Navigate} from "react-router-dom"
import {FaQuoteLeft, FaHashtag, FaUser, FaDiceFive} from "react-icons/fa6";
import {IoNotifications, IoLogOut} from "react-icons/io5";

export default function SideBar() {
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)
  const {setPageTitle} = useContext(NavContext)

  const handleLogout = () => {
    console.log('User logged out')
    setIsAuthenticated(false)
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  const menuItems = [
    { to: "/dashboard", icon: RiHome5Fill, label: "Dashboard" },
    { to: "/reviews", icon: FaQuoteLeft, label: "Reviews" },
    { to: "/", icon: FaHashtag, label: "Keywords" },
    { to: "/", icon: FaDiceFive, label: "Web crawler" },
    { to: "/", icon: IoNotifications, label: "Notifications" },
    { to: "/", icon: RiSettingsFill, label: "Settings" },
    { to: "/users", icon: FaUser, label: "User management" },
  ];

  return (
    <Flex
      direction="column"
      color="#161819"
      h="100%"
    >
      <Stack fontSize="1rem" gap="2.625rem">
        <Text fontSize="2rem" fontWeight="bold">
          Logo
        </Text>
        {menuItems.map(item => (
          <NavLink key={item.label} to={item.to} onClick={() => setPageTitle(item.label)}>
            <HStack>
              <Icon as={item.icon} boxSize="1.5rem" />
              {item.label}
            </HStack>
          </NavLink>
        ))}
      </Stack>

      <Spacer minWidth="2.625rem"/>

      <HStack>
        <Icon as={IoLogOut} boxSize="1.5rem"/>
        <Button unstyled onClick={handleLogout}>
          Logout
        </Button>
      </HStack>
    </Flex>
  )
}

