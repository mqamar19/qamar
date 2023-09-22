'use client'
// ./src/Componants/sidebar.tsx
import { useState } from 'react';

    
 function Button() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
    return (
        <>
        <button className="toggle-button" onClick={toggleSidebar}>
          🍔
          </button>
          </>
      );
}


export default Button;