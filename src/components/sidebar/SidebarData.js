import React from "react";
import { FiHome, FiGrid, FiDatabase, FiCircle, FiPackage, FiFile, FiPieChart, FiClipboard, FiLayers, FiSettings, FiSliders } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const SidebarData = [
    {
        category: "Main",
        title: "Dashboard",
        path: "/",
        icon: <FiHome />
    },
    {
        category: "Widgets",
        title: "Widgets",
        path: "/widgets",
        icon: <FiGrid />
    },
    {
        category: "Elements",
        title: "Components",
        path: "/users",
        icon: <FiDatabase />,
        iconClosed: <IoIosArrowForward />,
        iconOpened: <IoIosArrowDown />,
        subnav: [
            {
                title: "Cards design",
                path: "/users",
                icon: <FiCircle />
            },
            {
                title: "Default Calendar",
                path: "/users",
                icon: <FiCircle />
            }
        ]
    },
    {
        category: "",
        title: "Elements",
        path: "/users",
        icon: <FiPackage />,
        iconClosed: <IoIosArrowForward />,
        iconOpened: <IoIosArrowDown />,
        subnav: [
            {
                title: "Cards design",
                path: "/users",
                icon: <FiCircle />
            },
            {
                title: "Default Calendar",
                path: "/users",
                icon: <FiCircle />
            }
        ]
    },
    {
        category: "",
        title: "Advanced Elements",
        path: "/users",
        icon: <FiFile />,
        iconClosed: <IoIosArrowForward />,
        iconOpened: <IoIosArrowDown />,
        subnav: [
            {
                title: "Cards design",
                path: "/users",
                icon: <FiCircle />
            },
            {
                title: "Default Calendar",
                path: "/users",
                icon: <FiCircle />
            }
        ]
    },
    {
        category: "Charts & Tables",
        title: "Charts",
        path: "/users",
        icon: <FiPieChart />,
        iconClosed: <IoIosArrowForward />,
        iconOpened: <IoIosArrowDown />,
        subnav: [
            {
                title: "Cards design",
                path: "/users",
                icon: <FiCircle />
            },
            {
                title: "Default Calendar",
                path: "/users",
                icon: <FiCircle />
            }
        ]
    },
    {
        category: "",
        title: "Tables",
        path: "/users",
        icon: <FiClipboard />,
        iconClosed: <IoIosArrowForward />,
        iconOpened: <IoIosArrowDown />,
        subnav: [
            {
                title: "Cards design",
                path: "/users",
                icon: <FiCircle />
            },
            {
                title: "Default Calendar",
                path: "/users",
                icon: <FiCircle />
            }
        ]
    },
    {
        category: "Pages",
        title: "Pages",
        path: "/users",
        icon: <FiLayers />,
        iconClosed: <IoIosArrowForward />,
        iconOpened: <IoIosArrowDown />,
        subnav: [
            {
                title: "Cards design",
                path: "/users",
                icon: <FiCircle />
            },
            {
                title: "Default Calendar",
                path: "/users",
                icon: <FiCircle />
            }
        ]
    },
    {
        category: "Custom & Error Pages",
        title: "Custom Pages",
        path: "/users",
        icon: <FiSettings />,
        iconClosed: <IoIosArrowForward />,
        iconOpened: <IoIosArrowDown />,
        subnav: [
            {
                title: "Cards design",
                path: "/users",
                icon: <FiCircle />
            },
            {
                title: "Default Calendar",
                path: "/users",
                icon: <FiCircle />
            }
        ]
    },
    {
        category: "",
        title: "Submenus",
        path: "/users",
        icon: <FiSliders />,
        iconClosed: <IoIosArrowForward />,
        iconOpened: <IoIosArrowDown />,
        subnav: [
            {
                title: "Cards design",
                path: "/users",
                icon: <FiCircle />
            },
            {
                title: "Default Calendar",
                path: "/users",
                icon: <FiCircle />
            }
        ]
    },
]

export default SidebarData