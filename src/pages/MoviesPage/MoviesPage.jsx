import c from './MoviesPage.module.css';
import Search from '../../components/search/Search';
import { useEffect, useState } from 'react';
import { serchMovie } from '../../assets/API';
import { useSearchParams } from 'react-router-dom';
import Movies from '../../components/movies/Movies';

const MoviesPage = () => {
  // const [searchWord, setSearchWord] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query");

  useEffect(() => {
      const fetchTrendsMovies = async () => {
        try {
          if(!query) return;
          const data = await serchMovie(query);
          setMovies(data);
          
        } catch (err) {
          console.log(err);
          
        } finally {
          // console.log('Loading....');
          
        }
      };
      fetchTrendsMovies()
    }, [query]);
    
    const updateQueryString = (query) => {
      const nextParams = query !== "" ? { query } : {};
      setSearchParams(nextParams);
    };

  return (
    <div className='container'>
      <Search onSubmit={updateQueryString}/>
      <Movies movies={movies}/>
    </div>
  );
};
export default MoviesPage;