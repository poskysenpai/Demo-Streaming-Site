import React, { useState, useEffect } from 'react';
import Sample from './feed/sample.json';
import image from './assets/placeholder.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const DisplayFeed = ({ Type }) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 21;

  useEffect(() => {
    // Fetch, filter, and sort data based on Type, release year, and title
    const filteredMovies = Sample.filter(
      (movie) => movie.releaseYear >= 2010 && movie.programType === Type
    ).sort((a, b) => a.title.localeCompare(b.title));

    setMovies(filteredMovies);
  }, [Type]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(movies.length / postsPerPage)));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

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
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};

function Pagination({ postsPerPage, totalPosts, paginate, currentPage, nextPage, prevPage }) {
  const totalPageNumbers = Math.ceil(totalPosts / postsPerPage);

  return (
    <nav className="mt-4">
      <ul className="pagination flex justify-center space-x-2">
        {currentPage > 1 && (
          <li className="page-item">
            <button
              onClick={prevPage}
              className="page-link bg-blue-500 text-white px-4 py-1 rounded"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </li>
        )}
        <li className="page-item">
          
            {currentPage}
          
        </li>
        {currentPage < totalPageNumbers && (
          <li className="page-item">
            <button
              onClick={nextPage}
              className="page-link bg-blue-500 text-white px-4 py-1 rounded"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default DisplayFeed;
