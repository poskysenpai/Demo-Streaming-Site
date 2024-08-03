import React,{useState,useEffect} from 'react'
import Sample from './feed/sample.json'

const DisplayFeed = ({Type}) => {
    const [movies, setMovies] = useState([]);
    const placeholderImage = 'src\assets\placeholder.png'

    useEffect(() => {
      // Fetch and filter data
      const filteredMovies = Sample
        .filter(movie => movie.releaseYear >= 2010 && movie.programType == Type)
        .slice(0, 21); // Get only the first 21 entries
  
      setMovies(filteredMovies);
    }, [Type]);
  
    return (
      <div className="movies-list">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <div key={index} className="p-4">
             
              <img
                src={movie.images["Poster Art"].url}
                alt={movie.title}
                
                className="w-full h-auto rounded"
              />

               <h2 className="text-sm font-light mb-2">{movie.title}</h2>
            </div>
          ))
        ) : (
          <p>No movies found for the selected type.</p>
        )}
        </div>
      </div>
    );
  
}

export default DisplayFeed
