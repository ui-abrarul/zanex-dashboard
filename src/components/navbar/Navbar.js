import React, { useContext } from 'react'
import './navbar.css'
import { FiAlignLeft } from "react-icons/fi";
import { ToggleContext } from '../../App';
import { FiSearch, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import NavbarData from './NavbarData';

const Navbar = () => {

  const { sidebarToggle, setSidebarToggle, darkMode, setDarkMode, fullScreen, setFullScreen } = useContext(ToggleContext);

  const NavbarLinks = (props) => {
    return (
      <>
        {props.item.type !== 'darkmode' ? <Link to={props.item.path}
          className={props.item.type === 'user' ? 'user' : ''}>
          {props.item.type !== 'user' ? props.item.icon : <img src={props.item.icon} alt="" />}
        </Link> :
          <Link to={props.item.path} onClick={() => setDarkMode(!darkMode)} > {darkMode ? <FiSun /> : props.item.icon}</Link>
        }
      </>
    )
  }

  return (
    <div className='navbar'>
      <div className='navbar__left d-flex'>
        <div onClick={() => setSidebarToggle(!sidebarToggle)} className='toggle'><FiAlignLeft /></div>
        <span className="navbar__search">
          <input type="text" placeholder="search for anything..." />
          <button className="submit"><FiSearch /></button>
        </span>
      </div>
      <div className='navbar__right d-flex'>
        {NavbarData.map((item, index) => {
          return <NavbarLinks
            key={index}
            item={item}
          />
        })}
      </div>
    </div>
  )
}

export default Navbar