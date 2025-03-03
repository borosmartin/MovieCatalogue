import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import SearchField from "../components/SearchField";
import Movie from "../model/Movie";
import { getPopularMovies, searchForMovie } from "../services/api-service";

function HomePage() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [errorState, setError] = useState<string | null>(null);
  const [loadingState, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const movies = await getPopularMovies();
        setMovieList(movies);
      } catch (error) {
        setError("Error while fetching movies");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = async (searchQuery: string) => {
    setLoading(true);
    try {
      const searchedResult = await searchForMovie(searchQuery);
      setMovieList(searchedResult);
      setError(null);
    } catch (error) {
      setError("Error while searching for movies");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen p-4 text-white justify-center items-center max-w-8xl mx-auto">
      <SearchField onSearch={handleSearch} />
      {errorState != null && errorState.length != 0 ? (
        <p>{errorState}</p>
      ) : loadingState ? (
        <p>Loading...</p>
      ) : (
        <MoviesList movies={movieList} />
      )}
    </div>
  );
}

export default HomePage;
