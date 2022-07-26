import React, { useContext } from 'react'
import './sidebar.css'
import { ToggleContext } from '../../App';
import logo from '../../assets/logo.png'
import darklogo from '../../assets/darklogo.png'
import logo2 from '../../assets/logo2.png'
import SidebarData from './SidebarData';
import SubMenu from './SubMenu';
import { Link } from "react-router-dom";



const Sidebar = () => {

  const { sidebarToggle, darkMode } = useContext(ToggleContext);

  return (
    <aside className={`sidebar ${sidebarToggle ? "active" : ""}`}>
      <div className='sidebar__header d-flex'>
        <Link to="/">
          {darkMode ? <img src={sidebarToggle ? logo2 : darklogo} alt="" /> : <img src={sidebarToggle ? logo2 : logo} alt="" />}
        </Link>
      </div>
      <div className='sidebar__menu'>
        <ul>
          {SidebarData.map((item, index) => {
            return <SubMenu
              key={index}
              item={item}
            />
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar