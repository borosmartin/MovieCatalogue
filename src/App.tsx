import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { FavoriteStateProvider } from "./contexts/FavoriteContext";
import FavouritesPage from "./pages/FavouritesPage";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <FavoriteStateProvider>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies" element={<MoviesPage />}></Route>
            <Route path="/favourites" element={<FavouritesPage />}></Route>
          </Routes>
        </main>
      </div>
    </FavoriteStateProvider>
  );
}

export default App;
