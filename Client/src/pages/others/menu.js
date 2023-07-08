import { BsGrid, BsGridFill , BsCalendarEventFill, BsCalendarEvent} from "react-icons/bs"
import {HiUserGroup, HiOutlineUserGroup} from "react-icons/hi"
import {IoMdNotificationsOutline, IoMdNotifications} from "react-icons/io"
import {RiSettings5Fill,RiSettings5Line} from "react-icons/ri"

export const Menu = [
{label: "Dashboard", icon:<BsGrid size={23} />,filled:<BsGridFill size={23} />, size:24},
{label: "Calendar", icon:<BsCalendarEvent size={22} />,filled:<BsCalendarEventFill size={22} />, size:24},
{label: "Community", icon:<HiOutlineUserGroup size={23} />, filled:<HiUserGroup size={23} />, size:24},
{label: "Notifications", icon:<IoMdNotificationsOutline size={24} />,filled:<IoMdNotifications size={24} />, size:24},
{label: "Settings", icon:<RiSettings5Line size={24} />,filled:<RiSettings5Fill size={24} />, size:24},
]