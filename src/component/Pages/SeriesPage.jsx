import React,{useState} from 'react'
import { NavBar, Header, Footer } from '../layout'
import DisplayFeed from '../../DisplayFeed'
import SearchBar from '../layout/SearchBar';

const SeriesPage = () => {
    const [programType] = useState('Series');
  return (
    <div>
      <NavBar />
      <Header Type ={programType} />
      <SearchBar/>
      <DisplayFeed Type ={programType.toLowerCase()}/>
      <Footer /> 
    </div>
  )
}

export default SeriesPage
