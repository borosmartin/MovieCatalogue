import Movie from "../model/Movie";
import MovieCard from "./MovieCard";

function MoviesList(props: { movies: Movie[] }) {
  return (
    <div className="bg-neutral-700 mt-5 items-center justify-start flex flex-wrap">
      {props.movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesList;
