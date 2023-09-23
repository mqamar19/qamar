'use client'
// ./src/Componants/sidebar.tsx
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  
    const [isClose, setIsClose] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setIsClose(!isClose);
  };
 

  return (
    <>
    <div className='menubuttonwrapper'>
   <button className="toggle-button" onClick={toggleSidebar}>
  <FaBars />
</button>
</div>
     
  <div className='menusidebarwrapper'>
  <div className={`sidebar ${isOpen ? 'open' : ''} ${isClose ? 'close' : ''}`}>
      <div className='menuq'><ul>
        <li> <a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/testpage">Test Page</a></li>
      </ul></div>  
      
      
      <div className='dropbutton'>
      <button className="toggle-button clsbutton" onClick={toggleSidebar}>
  <FaTimes />
</button>
      </div>
      
    </div>
  </div>

    </>
  );
}

export default Sidebar;