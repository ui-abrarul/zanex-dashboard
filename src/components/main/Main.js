import React, { useContext } from 'react'
import Widgets from '../../pages/widgets/Widgets'
import Dashboard from '../../pages/dashboard/Dashboard'
import Navbar from '../navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import { ToggleContext } from '../../App'

import './main.css'

const Main = () => {

  const { sidebarToggle } = useContext(ToggleContext);

  return (
    <div className={`main ${sidebarToggle && "active"}`}>
      <Navbar />
      <div className='main-content'>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="widgets" element={<Widgets />} />
        </Routes>
      </div>
    </div>
  )
}

export default Main