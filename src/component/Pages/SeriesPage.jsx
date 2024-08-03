import React,{useState} from 'react'
import { NavBar, Header, Footer } from '../layout'
import DisplayFeed from '../../DisplayFeed'
import SearchBar from '../layout/SearchBar';

const SeriesPage = () => {
    const [programType] = useState('series');
  return (
    <div>
      <NavBar />
      <Header  />
      <SearchBar/>
      <DisplayFeed Type ={programType}/>
      <Footer /> 
    </div>
  )
}

export default SeriesPage
