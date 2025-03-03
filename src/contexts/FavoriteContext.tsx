import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Movie from "../model/Movie";

interface FavoriteContextValue {
  favoriteMovies: Movie[];
  addMovieToFavoriteMovies: (movie: Movie) => void;
  removeMovieFromFavoriteMovies: (movie: Movie) => void;
  isFavorite: (movie: Movie) => boolean;
}

const FavoriteContext = createContext<FavoriteContextValue>({
  favoriteMovies: [],
  addMovieToFavoriteMovies: () => {},
  removeMovieFromFavoriteMovies: () => {},
  isFavorite: () => false,
});

export const useFavoriteContext = () => useContext(FavoriteContext);

export const FavoriteStateProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>(() => {
    const storedFavoriteMovies = localStorage.getItem("favoriteMovies");
    return storedFavoriteMovies ? JSON.parse(storedFavoriteMovies) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
    console.log("Updated favorites:", favoriteMovies);
  }, [favoriteMovies]);

  const addMovieToFavoriteMovies = (movie: Movie) => {
    setFavoriteMovies((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, movie];
      return updatedFavorites;
    });
  };

  const removeMovieFromFavoriteMovies = (movie: Movie) => {
    setFavoriteMovies((prevFavorites) =>
      prevFavorites.filter((favoriteMovie) => favoriteMovie.id !== movie.id)
    );
  };

  const isFavorite = (movie: Movie) => {
    return favoriteMovies.some(
      (favoriteMovie) => favoriteMovie.id === movie.id
    );
  };

  const value = {
    favoriteMovies,
    addMovieToFavoriteMovies,
    removeMovieFromFavoriteMovies,
    isFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};
