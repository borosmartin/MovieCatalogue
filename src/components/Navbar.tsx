import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center bg-gray-800 text-white py-7 pl-7">
      <Link to="/" className="text-2xl font-bold hover:text-gray-400">
        Home
      </Link>
      <h1 className="mx-5">|</h1>
      <Link to="/movies" className="text-2xl font-bold hover:text-gray-400">
        Movies
      </Link>
      <h1 className="mx-5">|</h1>
      <Link to="/favourites" className="text-2xl font-bold hover:text-gray-400">
        Favourites
      </Link>
    </nav>
  );
}

export default Navbar;
