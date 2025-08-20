import { Input, InputGroup } from "@chakra-ui/react"
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
  <InputGroup flex="1" endElement={<FiSearch />}>
    <Input
      placeholder="Search"
      variant="subtle"
      bg="white"
    />
  </InputGroup>
  )
}
