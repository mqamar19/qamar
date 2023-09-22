'use client'
// ./src/Componants/sidebar.tsx
import { useState } from 'react';
import Image from 'next/image';
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  
    const [isClose, setIsClose] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setIsClose(!isClose);
  };
 

  return (
    <>
    <button className="toggle-button" onClick={toggleSidebar}>
      🍔
      </button>
     
    <div className={`sidebar ${isOpen ? 'open' : ''} ${isClose ? 'close' : ''}`}>
      <div className='menu'><ul>
        <li> <a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul></div>  
      
      
      <div className='dropbutton'>
      <button className="toggle-button clsbutton" onClick={toggleSidebar}>
    ❌
      </button>
      </div>
      
    </div>

    </>
  );
}

export default Sidebar;