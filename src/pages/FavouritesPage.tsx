import MoviesList from "../components/MoviesList";
import { useFavoriteContext } from "../contexts/FavoriteContext";

function FavouritesPage() {
  const { favoriteMovies } = useFavoriteContext();

  return (
    <div>
      {favoriteMovies.length === 0 && <p>No favourite movies yet</p>}
      <MoviesList movies={favoriteMovies} />
    </div>
  );
}

export default FavouritesPage;
