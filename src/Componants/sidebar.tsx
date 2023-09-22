'use client'
// ./src/Componants/sidebar.tsx
import { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <button className="toggle-button" onClick={toggleSidebar}>
      🍔
      </button>
     
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      
      <ul>
        <li> <a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </div>
    </>
  );
}

export default Sidebar;
