import { FiTrendingUp,FiDollarSign,FiBriefcase } from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";


const SalesCardData = [
    {
        title: "Total Sales",
        data: "34,516",
        hike: "3%",
        duration: "last month",
        icon: <FiTrendingUp/>,
        color: "bg-primary-gradient"
    },
    {
        title: "Total Leads",
        data: "56,992",
        hike: "3%",
        duration: "last month",
        icon: <IoRocketOutline/>,
        color: "bg-danger-gradient"
    },
    {
        title: "Total Profit",
        data: "$42,567",
        hike: "0.5%",
        duration: "last month",
        icon: <FiDollarSign/>,
        color: "bg-secondary-gradient"
    },
    {
        title: "Total Cost",
        data: "$34,789",
        hike: "0.2%",
        duration: "last month",
        icon: <FiBriefcase/>,
        color: "bg-success-gradient"
    }

]

export default SalesCardData