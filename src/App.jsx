import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import NavBar from './component/layout/NavBar'
// import Header from './component/layout/Header'
// import Footer from './component/layout/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {HomePage, MoviesPage, SeriesPage} from './component/pages'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavBar />
      <Header/>
      <Footer/> */}
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/series" element={<SeriesPage />} />
       
      </Routes>
    </>
  )
}

export default App
