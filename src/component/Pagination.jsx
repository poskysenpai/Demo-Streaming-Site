import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Pagination({ postsPerPage, totalPosts, paginate, currentPage, nextPage, prevPage }) {
    const totalPageNumbers = Math.ceil(totalPosts / postsPerPage);
  
    return (
      <nav className="my-4">
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
  export default Pagination;