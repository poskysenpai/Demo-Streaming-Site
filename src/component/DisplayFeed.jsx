import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Sample from '../feed/sample.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

const DisplayFeed = ({ Type, searchQuery, sortCriteria }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 21;

  const Placeholder = 'https://tse3.mm.bing.net/th?id=OIP.iI0fVyUG2rZEKZhRlq1rXgAAAA&pid=Api&P=0&h=220';

  const fetchMovies = async () => {
    let filteredMovies = Sample.filter(
      (movie) =>
        movie.releaseYear >= 2010 &&
        movie.programType === Type &&
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    switch (sortCriteria) {
      case 'yearAsc':
        filteredMovies = filteredMovies.sort((a, b) => a.releaseYear - b.releaseYear);
        break;
      case 'yearDesc':
        filteredMovies = filteredMovies.sort((a, b) => b.releaseYear - a.releaseYear);
        break;
      case 'titleAsc':
        filteredMovies = filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'titleDesc':
        filteredMovies = filteredMovies.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        filteredMovies = filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filteredMovies;
  };

  const { data: movies = [], isLoading, isError } = useQuery(['movies', Type, searchQuery, sortCriteria], fetchMovies);

  // Reset to the first page when search query or sort criteria changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortCriteria]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(movies.length / postsPerPage)));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  if (isLoading) return <div className='mb-52 '><p>Loading...</p>;</div>
  if (isError) return <div className='mb-52 '><p>Oops, something went wrong... </p></div>;

  return (
    <div className="movies-list">
       <Link to ="/" className="text-blue-500 flex justify-start pl-5 lg:pl-20"> <FontAwesomeIcon icon={faArrowLeft} /></Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-5 lg:mx-0 md:grid-cols-3 lg:grid-cols-7 gap-2 lg:px-16">
        {currentPosts.length > 0 ? (
          currentPosts.map((movie, index) => (
            <div key={index} className="py-2">
              <img
                src={movie.images["Poster Art"]?.url || Placeholder}
                alt={movie.title}
                onError={(e) => (e.target.src = Placeholder)}
                className="w-full sm:h-32 md:h-48 rounded object-cover"
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
        <li className="page-item">{currentPage}</li>
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
