import React, { useState } from 'react';
import { NavBar, Header, Footer } from '../layout';
import DisplayFeed from '../DisplayFeed';
import SearchBar from '../layout/SearchBar';

const SeriesPage = () => {
  const [programType] = useState('Series');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <NavBar />
      <Header Type={programType} />
      <SearchBar onSearch={setSearchQuery} />
      <DisplayFeed Type={programType.toLowerCase()} searchQuery={searchQuery} />
      <Footer />
    </div>
  );
};

export default SeriesPage;
