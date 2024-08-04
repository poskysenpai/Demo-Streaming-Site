import React from 'react'
import { NavBar, Header, Footer,LandingLayout} from '../layout'


const HomePage = () => {
  return (
    <div className='h-dvh'>
      <NavBar/>
      <Header Type = "Titles"/>
      <LandingLayout/>
      <Footer/>    
    </div>
  )
}

export default HomePage
