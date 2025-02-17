import React from 'react'

const Footer = () => {
  const FacebookPlaceholder = 'https://tse2.mm.bing.net/th?id=OIP.0UMxJnaT8M9CJZtnkAqb-wHaHa&pid=Api&P=0&h=220'
    const TwitterPlaceholder = 'https://tse4.mm.bing.net/th?id=OIP.EhGYQ7HxEvQwe0P7EHauuQAAAA&pid=Api&P=0&h=220'
    const InstagramPlaceholder = 'https://tse4.mm.bing.net/th?id=OIP.zkt5q-s5agHPTD49j8T2OQHaHa&pid=Api&P=0&h=220'
   const AppstorePlaceholder = 'https://tse2.mm.bing.net/th?id=OIP.YCnKSjT1JiLVdu4bAqpBAAHaE8&pid=Api&P=0&h=220';
  const PlaystorePlaceholder = 'https://tse3.mm.bing.net/th?id=OIP.a7hkwxpVOiMzChf87GmGdwHaCM&pid=Api&P=0&h=220';
   const WindowPlaceholder = 'https://tse3.mm.bing.net/th?id=OIP.TG7rJo1pUewli3FfEQCyPgHaCr&pid=Api&P=0&h=220'
    return (
      <div className='pt-20 md:pt-0'>
        <div className='md:h-44 w-screen bg-zinc-900'>
          <div className='lg:pr-96 sm:pt-8 md:py-4 lg:py-8'>
            <div className='text-gray-300'>
              <p>Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account</p>
            </div>
            <div className='text-gray-400 text-sm pt-1'>
              <p>Copyright @ 2016 DEMO Streaming All Rights Reserved.</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row mx-10 justify-between md:items-center pt-4'>
            <div className='flex justify-center md:justify-start space-x-4 mb-4 md:mb-0 lg:ml-16'>
              <div>
                <img
                  src={'src/assets/social/facebook-white.svg'|| FacebookPlaceholder}
                  alt='Facebook'
                  className='w-10 h-5'
                  onError={(e) => (e.target.src = FacebookPlaceholder)}
                />
              </div>
              <div>
                <img
                  src={'src/assets/social/twitter-white.svg' || TwitterPlaceholder}
                  alt='Twitter'
                  className='w-10 h-5'
                  onError={(e) => (e.target.src = TwitterPlaceholder)}
                />
              </div>
              <div>
                <img
                  src={'src/assets/social/instagram-white.svg' || InstagramPlaceholder}
                  alt='Instagram'
                  className='w-10 h-5'
                  onError={(e) => (e.target.src = InstagramPlaceholder)}
                />
              </div>
            </div>
            <div className='flex justify-center md:justify-end space-x-4 pr-10'>
              <div>
                <img
                  src={'src/assets/store/app-store.svg' || AppstorePlaceholder}
                  alt='App Store'
                  className='w-20 h-10'
                  onError={(e) => (e.target.src = AppstorePlaceholder)}
                />
              </div>
              <div>
                <img
                  src={'src/asses/store/play-store.svg' || PlaystorePlaceholder}
                  alt='Play Store'
                  className='w-20 h-10'
                  onError={(e) => (e.target.src = PlaystorePlaceholder)}
                />
              </div>
              <div>
                <img
                  src={'src/assets/store/windows-store.svg' || WindowPlaceholder}
                  alt='Windows Store'
                  className='w-20 h-10'
                  onError={(e) => (e.target.src = WindowPlaceholder)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  
