import { FaChrome, FaOpera, FaFirefox, FaEdgeLegacy, FaAndroid } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";


const BrowserData = [
    {
        id:1,
        name: "Chrome",
        visits: "35,502",
        icon: <FaChrome/>,
        hike: "12.75%",
        hikeIcon: <FiArrowUp/>,
        hikeColor: "text-success",
        background: "bg-secondary-gradient"
    },
    {
        id:2,
        name: "Chrome",
        visits: "35,502",
        hike: "12.75%",
        hikeIcon: <FiArrowUp/>,
        icon: <FaOpera/>,
        hikeColor: "text-danger",
        background: "bg-danger-gradient"
    },
    {
        id:3,
        name: "Chrome",
        visits: "35,502",
        hike: "12.75%",
        hikeIcon: <FiArrowUp/>,
        icon: <FaFirefox/>,
        hikeColor: "text-success",
        background: "bg-purple-gradient"
    },
    {
        id:4,
        name: "Chrome",
        visits: "35,502",
        hike: "12.75%",
        hikeIcon: <FiArrowUp/>,
        icon: <FaEdgeLegacy/>,
        hikeColor: "text-success",
        background: "bg-info-gradient"
    },
    {
        id:5,
        name: "Chrome",
        visits: "35,502",
        hike: "12.75%",
        hikeIcon: <FiArrowUp/>,
        icon: <FaAndroid/>,
        hikeColor: "text-danger",
        background: "bg-success-gradient"
    }
    
]

export default BrowserData