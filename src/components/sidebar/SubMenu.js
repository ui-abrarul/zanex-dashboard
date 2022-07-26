import React, { useState } from 'react'
import { Link } from "react-router-dom";

const SubMenu = ({ item }) => {

    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav);


    return (
        <li>
            {item.category !== "" && <p className='sidebar__category'>{item.category}</p>}
            <Link className='sidebar__link' to={item.path} onClick={item.subnav && showSubnav}>
                <span className='sidebar__icon'>{item.icon}</span>
                <span className='sidebar__item'>{item.title}</span>
                {item.subnav && subnav ? <span className='sidebar__arrow'>{item.iconOpened}</span> : <span className='sidebar__arrow'>{item.iconClosed}</span>}
            </Link>
            {subnav && <ul className='sidebar__submenu'>
                {item.subnav.map((menu, index) => {
                    return (
                        <li className='sidebar__subitem' key={index}>{menu.title}</li>
                    )
                })}
            </ul>}
        </li>

    )
}

export default SubMenu