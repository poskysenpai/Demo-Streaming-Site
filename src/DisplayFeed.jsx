import React, { useState, useEffect } from 'react';
import Sample from './feed/sample.json';
import image from './assets/placeholder.png';

const DisplayFeed = ({ Type }) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 21;

  useEffect(() => {
    // Fetch and filter data based on Type and release year
    const filteredMovies = Sample.filter(
      (movie) => movie.releaseYear >= 2010 && movie.programType === Type
    );

    setMovies(filteredMovies);
  }, [Type]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="movies-list">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        {currentPosts.length > 0 ? (
          currentPosts.map((movie, index) => (
            <div key={index} className="p-4">
              <img
                src={movie.images["Poster Art"]?.url || image}
                alt={movie.title}
                onError={(e) => (e.target.src = image)}
                className="w-full h-auto rounded object-cover"
              />
              <h2 className="text-sm font-light mb-2">{movie.title}</h2>
            </div>
          ))
        ) : (
          <p>No movies found for the selected type.</p>
        )}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={movies.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination flex justify-center space-x-2">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              className={`page-link ${
                number === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
              } px-4 py-2 rounded`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DisplayFeed;
