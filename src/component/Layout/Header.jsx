import React from 'react'

const Header = ({Type}) => {
  return (
    <div>
      <div className="w-screen  h-11 flex items-center bg-zinc-900">
      <div className='sm:ml-10 lg:ml-32 '>
      <h1 className='text-white text-xl font-medium'>Popular {Type}</h1>
      </div>
      </div>
    </div>
  )
}

export default Header
