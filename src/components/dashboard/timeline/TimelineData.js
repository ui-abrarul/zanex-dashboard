import { FaUserPlus,FaShoppingBag,FaComment,FaThumbsUp,FaRegEnvelope } from "react-icons/fa";

const TimelineData = [
    {
        id:1,
        name: "Mr John",
        activity: "Started following you",
        date: "01 June 2020",
        time: "1m",
        timebg: "bg-primary",
        icon: <FaUserPlus/>,
        color: "text-primary",
        background: "bg-primary-transparent"
    },
    {
        id:2,
        name: "Lily",
        activity: "1 Commented applied",
        date: "01 July 2020",
        time: "3m",
        timebg: "bg-danger",
        icon: <FaComment/>,
        color: "text-secondary",
        background: "bg-secondary-transparent"
    },
    {
        id:3,
        name: "Kevin",
        activity: "liked your site",
        date: "05 July 2020",
        time: "5m",
        timebg: "bg-warning",
        icon: <FaThumbsUp/>,
        color: "text-success",
        background: "bg-success-transparent"
    },
    {
        id:4,
        name: "Andrena",
        activity: "posted a new article",
        date: "09 October 2020",
        time: "5m",
        timebg: "bg-info",
        icon: <FaRegEnvelope/>,
        color: "text-info",
        background: "bg-info-transparent"
    },
    {
        id:5,
        name: "Sonia",
        activity: "Delivery in progress",
        date: "12 October 2020",
        time: "5m",
        timebg: "bg-warning",
        icon: <FaShoppingBag/>,
        color: "text-danger",
        background: "bg-danger-transparent"
    }
    
]
export default TimelineData