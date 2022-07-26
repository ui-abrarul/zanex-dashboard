import React, { useState, createContext } from 'react'

import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'
import {
  BrowserRouter
} from "react-router-dom";

export const ToggleContext = createContext();


function App() {

  const [darkMode,setDarkMode] = useState (false)

  const [sidebarToggle, setSidebarToggle] = useState(false)
  
  return (
    <ToggleContext.Provider value={{ sidebarToggle, setSidebarToggle, darkMode,setDarkMode }}>
      <div className={`App ${darkMode && "dark"}`}>
        <BrowserRouter>
          <Sidebar />
          <Main />
        </BrowserRouter>
      </div>
    </ToggleContext.Provider>
  );
}

export default App;
