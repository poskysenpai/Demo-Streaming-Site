import React from 'react'
import {Link} from 'react-router-dom'
const LandingLayout = () => {
  const Placeholder = 'https://tse3.mm.bing.net/th?id=OIP.iI0fVyUG2rZEKZhRlq1rXgAAAA&pid=Api&P=0&h=220';
  return (
    <div className='mb-60 md:mb-80 lg:mb-48 lg:py-16'>
      <div className='flex px-14 md:pl-24   py-8 '>
          <div className="mx-2 relative w-32 h-48">
          <Link to="/series">
          <img
            src={Placeholder}
            alt="Series"
            onError={(e) => (e.target.src = Placeholder)}
            className="w-32 h-48 rounded"
            
          />
          <p className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold bg-black bg-opacity-30">
            Series 
          </p>
          </Link>
          <p>Popular Series</p>

        </div>

        <div className="mx-2 relative w-32 h-48">
          <Link to="/movies">
          <img
            src={Placeholder}
            alt="Movies"
            onError={(e) => (e.target.src = Placeholder)}
            className="w-32 h-48 rounded"
          />
          <p className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold bg-black bg-opacity-30">
            Movies
          </p>
          </Link>
          <p>Popular Movies</p>
        </div>
      </div>
    </div>
  )
}

export default LandingLayout
