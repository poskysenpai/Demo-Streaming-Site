import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center w-screen h-12 bg-custom-blue">
        <div className="sm:ml-10 lg:ml-32">
          <h1 className="text-white sm:text-xl lg:text-2xl font-medium">DEMO Streaming</h1>
        </div>
        <div className="relative">
          <nav className="hidden md:flex md:mr-10 lg:mr-20">
            <a className="sm:mx-1 lg:mx-3">
              <button className="text-white text-sm">Log in</button>
            </a>
            <a className="sm:mx-1 lg:mx-3">
              <button className="text-white text-sm rounded-sm bg-zinc-900 md:py-1 md:px-3">Start your free trial</button>
            </a>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white text-xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      <div className={`fixed top-0 right-0 h-auto w-64 bg-custom-blue text-white transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white text-2xl">
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-4 mt-4">
          <a onClick={toggleMenu} className="w-full text-center py-2">
            <button className="w-full text-white text-sm">Log in</button>
          </a>
          <a onClick={toggleMenu} className="w-full text-center py-2">
            <button className="w-full text-white text-sm rounded-sm bg-zinc-900 py-1 px-3">Start your free trial</button>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
