import React from 'react'
import { NavBar, Header, Footer} from '../layout'
import {Link} from 'react-router-dom'
import SearchBar from '../layout/SearchBar'

const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <Header />
      <SearchBar/>
      <Footer/>    
    </div>
  )
}

export default HomePage
