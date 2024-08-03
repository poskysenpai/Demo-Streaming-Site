import React,{useState} from 'react'
import { NavBar, Header, Footer } from '../layout'
import DisplayFeed from '../../DisplayFeed'
import SearchBar from '../layout/SearchBar';
const MoviesPage = () => {
    const [programType] = useState('Movie');
  return (
    <div>
      <NavBar />
      <Header Type ={programType + 's'} />
      <SearchBar/>
      <DisplayFeed Type ={programType.toLowerCase()}/>
      <Footer /> 
    </div>
  )
}

export default MoviesPage

