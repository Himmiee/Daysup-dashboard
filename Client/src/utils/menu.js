import {
  BsGrid,
  BsGridFill,
  BsCalendarEventFill,
  BsCalendarEvent,
} from "react-icons/bs";
import { HiUserGroup, HiOutlineUserGroup } from "react-icons/hi";
import { IoMdNotificationsOutline, IoMdNotifications } from "react-icons/io";
import { RiSettings5Fill, RiSettings5Line } from "react-icons/ri";

export default function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Menu = [
  {
    label: "Dashboard",
    icon: <BsGrid size={23} />,
    filled: <BsGridFill size={23} />,
    link: "main",
    size: 24,
  },
  {
    label: "Calendar",
    icon: <BsCalendarEvent size={22} />,
    filled: <BsCalendarEventFill size={22} />,
    link: "event",
    size: 24,
  },
  {
    label: "Community",
    icon: <HiOutlineUserGroup size={23} />,
    filled: <HiUserGroup size={23} />,
    link: "user",
    size: 24,
  },
  {
    label: "Notifications",
    icon: <IoMdNotificationsOutline size={24} />,
    filled: <IoMdNotifications size={24} />,
    link: "notification",
    size: 24,
  },
  {
    label: "Settings",
    icon: <RiSettings5Line size={24} />,
    filled: <RiSettings5Fill size={24} />,
    link: "settings",
    size: 24,
  },
];

export const AccordionMenu = [
  {
    name: "Dexter",
    status: "Pending",
    mail: "LeedaaGreat@gmail.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velitad sit laudantium odit ullam. Sint harum earum nemo. Ex asperioresinventore, amet molestias dolor tempora quibusdam quo laboriosam ut?Eaque repellendus quod dolore, totam harumlaudantium itaque?",
  },
  {
    name: "Tasha",
    status: "Pending",
    mail: "LeedaaGreat@gmail.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velitad sit laudantium odit ullam. Sint harum earum nemo. Ex asperioresinventore, amet molestias dolor tempora quibusdam quo laboriosam ut?Eaque repellendus quod dolore, totam harumlaudantium itaque?",
  },
  {
    name: "Lyssa",
    status: "Pending",
    mail: "LeedaaGreat@gmail.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velitad sit laudantium odit ullam. Sint harum earum nemo. Ex asperioresinventore, amet molestias dolor tempora quibusdam quo laboriosam ut?Eaque repellendus quod dolore, totam harumlaudantium itaque?",
  },
  {
    name: "Plumm",
    status: "Pending",
    mail: "LeedaaGreat@gmail.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velitad sit laudantium odit ullam. Sint harum earum nemo. Ex asperioresinventore, amet molestias dolor tempora quibusdam quo laboriosam ut?Eaque repellendus quod dolore, totam harumlaudantium itaque?",
  },
  {
    name: "Tasha",
    status: "Pending",
    mail: "LeedaaGreat@gmail.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velitad sit laudantium odit ullam. Sint harum earum nemo. Ex asperioresinventore, amet molestias dolor tempora quibusdam quo laboriosam ut?Eaque repellendus quod dolore, totam harumlaudantium itaque?",
  },
  {
    name: "Tasha",
    status: "Pending",
    mail: "LeedaaGreat@gmail.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velitad sit laudantium odit ullam. Sint harum earum nemo. Ex asperioresinventore, amet molestias dolor tempora quibusdam quo laboriosam ut?Eaque repellendus quod dolore, totam harumlaudantium itaque?",
  },
  {
    name: "Tasha",
    status: "Pending",
    mail: "LeedaaGreat@gmail.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velitad sit laudantium odit ullam. Sint harum earum nemo. Ex asperioresinventore, amet molestias dolor tempora quibusdam quo laboriosam ut?Eaque repellendus quod dolore, totam harumlaudantium itaque?",
  },
  {
    name: "Tasha",
    status: "Pending",
    mail: "LeedaaGreat@gmail.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velitad sit laudantium odit ullam. Sint harum earum nemo. Ex asperioresinventore, amet molestias dolor tempora quibusdam quo laboriosam ut?Eaque repellendus quod dolore, totam harumlaudantium itaque?",
  },
  {
    name: "Tasha",
    status: "Pending",
    mail: "LeedaaGreat@gmail.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velitad sit laudantium odit ullam. Sint harum earum nemo. Ex asperioresinventore, amet molestias dolor tempora quibusdam quo laboriosam ut?Eaque repellendus quod dolore, totam harumlaudantium itaque?",
  },
];

export const SettingsMenu = [
  { name: "Account" },
  { name: "Notifications" },
  { name: "Privacy" },
];

export const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

export const tags = [
  {name:"Sciences",tag:"view brochure"},
  {name:"Engineering", tag:"view brochure"},
  {name:"Art", tag:"view brochure"},
  {name:"Social Sciences", tag:"view brochure"},
  {name:"Education", tag:"view brochure"}
]

export const events = [
  {name:"Science Class Intro",date:"23rd March, 2023"},
  {name:"Engineering Class Intro", date:"24th March, 2023"},
  {name:"Art Class Intro", date:"25th March, 2023"},
  {name:"Social Sciences Intro", date:"1st April,2023"},
  {name:"Education Class Inro", date:"2nd April, 2023"},
]
