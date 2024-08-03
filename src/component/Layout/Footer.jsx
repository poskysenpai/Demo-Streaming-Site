import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='md:h-44 w-screen bg-zinc-900'>
        <div className=' lg:pr-96 sm:pt-8 md:py-4 lg:py-8'>
            <div className='text-gray-300'><p>Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account</p></div>
            <div className='text-gray-400 text-sm pt-1'><p>Copyright @ 2016 DEMO Streaming All Rights Reserved.</p></div>
        </div>
        <div className="flex flex-col md:flex-row mx-10 justify-between md:items-center pt-4">
        <div className="flex justify-center md:justify-start space-x-4 mb-4 md:mb-0 lg:ml-16">
            <div>
            <img src="src/assets/social/facebook-white.svg" alt="Facebook" className="w-10 h-5" />
            </div>
            <div>
            <img src="src/assets/social/twitter-white.svg" alt="Twitter" className="w-10 h-5" />
            </div>
            <div>
            <img src="src/assets/social/instagram-white.svg" alt="Instagram" className="w-10 h-5" />
            </div>
        </div>
        <div className="flex justify-center md:justify-end space-x-4 lg:pb-4 pr-10">
            <div>
            <img src="src/assets/store/app-store.svg" alt="App Store" className="w-20 h-10" />
            </div>
            <div>
            <img src="src/assets/store/play-store.svg" alt="Play Store" className="w-20 h-10" />
            </div>
            <div>
            <img src="src/assets/store/windows-store.svg" alt="Windows Store" className="w-20 h-10" />
            </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
