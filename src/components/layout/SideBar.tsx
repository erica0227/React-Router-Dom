import {
  Stack,
  HStack,
  Icon,
  Flex,
  Text,
  Button,
  Spacer,
  Box,
  Drawer,
  Portal,
  CloseButton,
} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import {RiHome5Fill, RiSettingsFill} from "react-icons/ri";
import {useContext} from 'react'
import {AuthContext} from '../../context/AuthContext.tsx'
import {NavContext} from "../../context/NavContext.tsx"
import {Navigate} from "react-router-dom"
import {FaQuoteLeft, FaHashtag, FaUser, FaDiceFive} from "react-icons/fa6";
import {IoNotifications, IoLogOut} from "react-icons/io5";
import {FiMenu} from "react-icons/fi";

const menuItems = [
  { to: "/dashboard", icon: RiHome5Fill, label: "Dashboard" },
  { to: "/reviews", icon: FaQuoteLeft, label: "Reviews" },
  { to: "/", icon: FaHashtag, label: "Keywords" },
  { to: "/", icon: FaDiceFive, label: "Web crawler" },
  { to: "/", icon: IoNotifications, label: "Notifications" },
  { to: "/", icon: RiSettingsFill, label: "Settings" },
  { to: "/users", icon: FaUser, label: "User management" },
];

export default function SideBar() {
  return (
    <>
      <Box h="100%" display={{ base: "none", md: "block" }}>
        <SidebarLeft />
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <SidebarDrawer />
      </Box>
    </>
  )
}

const SidebarDrawer = () => {
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)
  const {setPageTitle} = useContext(NavContext)

  const handleLogout = () => {
    console.log('User logged out')
    setIsAuthenticated(false)
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return (
    <Drawer.Root placement="start">
      <Flex
        alignItems="center"
        gap={6}
      >
        <Drawer.Trigger asChild>
          <Button variant="outline" size="sm">
            <FiMenu />
          </Button>
        </Drawer.Trigger>

        <Text fontSize="2xl" fontWeight="bold">
          Logo
        </Text>
      </Flex>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title fontSize="2xl" fontWeight="bold">Logo</Drawer.Title>
            </Drawer.Header>

            <Drawer.Context>
              {(store) => (
                <Drawer.Body>
                  <Stack gap={8}>
                    {menuItems.map(item => (
                      <NavLink key={item.label} to={item.to} onClick={() => {
                        setPageTitle(item.label)
                        store.setOpen(false)
                      }}>
                        <HStack>
                          <Icon as={item.icon} boxSize="1.5rem" />
                          {item.label}
                        </HStack>
                      </NavLink>
                    ))}
                  </Stack>
                </Drawer.Body>
              )}
            </Drawer.Context>

            <Drawer.Footer justifyContent="flex-start">
              <HStack>
                <Icon as={IoLogOut} boxSize="1.5rem"/>
                <Button unstyled onClick={handleLogout}>
                  Logout
                </Button>
              </HStack>
            </Drawer.Footer>

            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}

const SidebarLeft = () => {
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)
  const {setPageTitle} = useContext(NavContext)

  const handleLogout = () => {
    console.log('User logged out')
    setIsAuthenticated(false)
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

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
