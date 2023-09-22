'use client'
// ./src/Componants/sidebar.tsx
import { useState } from 'react';
import Sidebar from '@/Componants/sidebar';
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}


function Button() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  
 

  return (
    <>
   <div>
      <button className="toggle-button" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>

    </>
  );
}

export default Button;