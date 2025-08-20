import { createContext } from "react"
import type { Dispatch, SetStateAction } from "react"


type NavContextType = {
  pageTitle: string;
  setPageTitle: Dispatch<SetStateAction<string>>;
}

export const  NavContext = createContext< NavContextType>({
  pageTitle: "Dashboard",
  setPageTitle: () => {},
})