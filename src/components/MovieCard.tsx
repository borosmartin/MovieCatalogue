import { useFavoriteContext } from "../contexts/FavoriteContext";
import Movie from "../model/Movie";

function MovieCard(props: { movie: Movie }) {
  const {
    isFavorite,
    addMovieToFavoriteMovies,
    removeMovieFromFavoriteMovies,
  } = useFavoriteContext();

  return (
    <div className="bg-gray-800 p-4 m-4 w-75 h-135 rounded-2xl flex flex-col">
      <div className="relative group">
        <img
          className="rounded-2xl"
          src={`http://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
        />
        <button
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          onClick={() => {
            if (isFavorite(props.movie)) {
              removeMovieFromFavoriteMovies(props.movie);
            } else {
              addMovieToFavoriteMovies(props.movie);
            }
          }}
        >
          {isFavorite(props.movie) ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mt-3">{props.movie.title}</h2>
      </div>
      <p>{props.movie.release_date}</p>
    </div>
  );
}

export default MovieCard;
