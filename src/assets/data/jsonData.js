import { VscMegaphone } from 'react-icons/vsc'
import { IoMdTimer } from 'react-icons/io'
import { BsLaptop } from 'react-icons/bs'
import { HiOutlineUsers } from 'react-icons/hi'
import { CgScreen } from 'react-icons/cg'
import { FiSettings } from 'react-icons/fi'

const sidebarData = [
  {
    display_name: "Listings",
    route: "/listings",
    icon: <VscMegaphone />,
    id: "1",
  },
  {
    display_name: "Dashboard",
    route: "/dashboard",
    icon: <IoMdTimer />,
    id: "2",
  },
  {
    display_name: "Providers",
    route: "/providers",
    icon: <BsLaptop />,
    id: "3",
  },
  {
    display_name: "Users",
    route: "/users",
    icon: <HiOutlineUsers />,
    id: "4",
  },
  {
    display_name: "Billing",
    route: "/billing",
    icon: <CgScreen />,
    id: "5",
  },
  {
    display_name: "Settings",
    route: "/settings",
    icon: <FiSettings />,
    id: "6",
  },
];


export {
    sidebarData
}