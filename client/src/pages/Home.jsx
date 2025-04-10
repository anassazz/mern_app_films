import { useEffect, useState } from "react";
import { fetchPopularMovies, searchMovies } from "../services/api";
import MovieCard from "../components/Card";
import Loader from "../components/Loader";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const loadMovies = async () => {
    setLoading(true);
    const data = query ? await searchMovies(query) : await fetchPopularMovies();
    setMovies(data);
    setLoading(false);
  };

  useEffect(() => {
    loadMovies();
  }, [query]);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Rechercher un film..."
        className="w-full p-2 mb-4 border rounded"
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
