import { VscMegaphone } from "react-icons/vsc";
import { IoMdTimer } from "react-icons/io";
import { BsLaptop } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { CgScreen } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { image1, image2, image3 } from "../images";

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

const listingData = [
  {
    id: 1,
    image: image1,
    title: "1312 Richmond",
    rating: 4,
    address: "Richmond Place 1312,Charlotte, New York",
    door: "Locked",
    avg_enegy_usage: 412,
    noise_level: 23,
  },
  {
    id: 2,
    image: image2,
    title: "6 Fremont Street",
    rating: 5,
    address: "6 Fremont Street, Loyalton state, Boston",
    door: "Locked",
    avg_enegy_usage: 592,
    noise_level: 59,
  },
  {
    id: 3,
    image: image3,
    title: "83 Vista  Street",
    rating: 3,
    address: "83 Vista  Street, Encinitas, Washington",
    door: "Locked",
    avg_enegy_usage: 623,
    noise_level: 53,
  },
];

export { sidebarData, listingData };
