import React,{useRef} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa' 

const NavBar = () => {
    const navRef = useRef();

    const showNavBar =() =>{
        navRef.current.classList.toggle('responsive_nav')
    }
  return (
    <div>
      <div className="flex justify-between items-center w-screen h-12  bg-custom-blue">
        <div className='sm:ml-10 lg:ml-32'>
            <h1 className='text-white sm:text-sm lg:text-2xl font-medium'>DEMO Streaming</h1>
        </div>
        <nav className='md:flex sm:mr-10 lg:mr-20'>
            <a className='sm:mx-1 lg:mx-3'>
                <button className='text-white text-sm'>Log in</button>
            </a>
            <a className='sm:mx-1 lg:mx-3 '>
                <button className='text-white text-sm rounded-sm bg-zinc-900 md:py-1 md:px-3'>Start your free trial</button>
            </a>
            {/* <button onClick ={showNavBar}>
                <FaTimes/>
            </button> */}
        </nav>
        {/* <button onClick ={showNavBar}>
                <FaBars/>
            </button> */}
      </div>
    </div>
  )
}

export default NavBar
