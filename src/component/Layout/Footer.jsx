import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='h-44 w-screen bg-zinc-900'>
        <div className='pr-96  py-8'>
            <div className='text-gray-300'><p>Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account</p></div>
            <div className='text-gray-400 text-sm'><p>Copyright @ 2016 DEMO Streaming All Rights Reserved.</p></div>
        </div>
        <div className='flex mx-10 justify-between py-3'>
            <div className='flex ml-16'>
                <div><img src="src\assets\social\facebook-white.svg" alt="" className='w-10 h-5'/></div>
                <div><img src="src\assets\social\twitter-white.svg" alt="" className='w-10 h-5'/></div>
                <div><img src="src\assets\social\instagram-white.svg" alt="" className='w-10 h-5'/></div>
                
            </div>
            <div className='flex pb-8 pr-10'>
                <div><img src="src\assets\store\app-store.svg" alt="" className='w-20 h-10 mx-2'/></div>
                <div><img src="src\assets\store\play-store.svg" alt="" className='w-20 h-10 mx-2' /></div>
                <div><img src="src\assets\store\windows-store.svg" alt="" className='w-20 h-10 mx-2'/></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
