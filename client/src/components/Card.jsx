import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="hover:scale-105 transition-transform">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-72 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold dark:text-white">{movie.title}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">Note : {movie.vote_average}/10</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
