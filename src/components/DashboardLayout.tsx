import {Outlet} from "react-router-dom"
import SideBar from './SideBar.tsx'

export default function Dashboard() {
  return (
    <div>
      <SideBar/>
      <Outlet/>
    </div>
  );
}
