import React, { useState } from 'react';
import { NavBar, Header, Footer } from '../layout';
import DisplayFeed from '../DisplayFeed';
import SearchBar from '../layout/SearchBar';

const SeriesPage = () => {
  const [programType] = useState('Series');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState('');

  return (
    <div>
      <NavBar />
      <Header Type={programType} />
      <SearchBar onSearch={setSearchQuery} onSort={setSortCriteria} />
      <DisplayFeed Type={programType.toLowerCase()} searchQuery={searchQuery} sortCriteria={sortCriteria} />
      <Footer />
    </div>
  );
};

export default SeriesPage;
