
import { FiMoon, FiMinimize, FiBell, FiMessageSquare, FiMenu, FiSettings } from "react-icons/fi";
import user from '../../assets/user.jpg'


const NavbarData = [
    {
        type: "darkmode",
        path: "",
        icon: <FiMoon />
    },
    {
        type: "togglescreen",
        path: "",
        icon: <FiMinimize />
    },
    {
        type: "notifications",
        path: "",
        icon: <FiBell />
    },
    {
        type: "messages",
        path: "",
        icon: <FiMessageSquare />
    },
    {
        type: "user",
        path: "",
        icon: user
    },
    {
        type: "menu",
        path: "",
        icon: <FiMenu/>
    },
    {
        type: "settings",
        path: "",
        icon: <FiSettings/>
    }
]

export default NavbarData