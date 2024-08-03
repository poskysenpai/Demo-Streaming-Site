import React,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa' 

const NavBar = () => {
    //const navRef = useRef();

    
      const [isOpen, setIsOpen] = useState(false);

      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
  return (
    <div>
      <div className="flex justify-between items-center w-screen h-12  bg-custom-blue">
        <div className='sm:ml-10 lg:ml-32'>
            <h1 className='text-white sm:text-xl lg:text-2xl font-medium'>DEMO Streaming</h1>
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
      {isOpen && (
        <div className="absolute top-12 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-2 p-4 md:hidden">
          <a onClick={toggleMenu} className="sm:mx-1 lg:mx-3">
            <button className="text-white text-sm">Log in</button>
          </a>
          <a onClick={toggleMenu} className="sm:mx-1 lg:mx-3">
            <button className="text-white text-sm rounded-sm bg-zinc-900 py-1 px-3">Start your free trial</button>
          </a>
        </div>
      )}
    </div>
        {/* <button onClick ={showNavBar}>
                <FaBars/>
            </button> */}
      </div>
    </div>
  )
}

export default NavBar
