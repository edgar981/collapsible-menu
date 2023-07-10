import { HiOutlineIdentification, HiOutlineBriefcase, HiOutlineClock } from "react-icons/hi";
import { MdOutlineLocationOn, MdOutlineCalendarToday, MdOutlineQuestionAnswer, MdOutlineQuestionMark, MdOutlineSettings, MdOutlineCurrencyExchange } from "react-icons/md";

const Menus = [
    { title: "Dashboard" },
    { title: "Providers",
      icon: <HiOutlineIdentification />,
      submenu: true,
      submenuItems: [
          { title: "Dashboard" },
          { title: "Providers" },
          { title: "My Tasks" },
          { title: "All Tasks" },
          { title: "Roster" },
          { title: "Privileges" },
          { title: "Credentialing" },
          { title: "State Laws" }
      ],
    },
    { title: "Practices", icon: <MdOutlineLocationOn />, },
    { title: "Jobs", icon: <HiOutlineBriefcase />, },
    { title: "Schedules", icon: <MdOutlineCalendarToday /> },
    { title: "Time & invoices",  icon: <HiOutlineClock /> },
    { title: "Time & pay", icon: <MdOutlineCurrencyExchange /> },
    { title: "Messages", icon: <MdOutlineQuestionAnswer /> },
    { title: "Help", spacing: true, icon: <MdOutlineQuestionMark /> },
    { title: "Settings", icon: <MdOutlineSettings /> },
]

export default Menus;