import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";
import Loader from "../components/Loader";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovieDetails(id).then((data) => {
      setMovie(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div className="p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-64 mb-4 rounded"
      />
      <p><strong>Date de sortie :</strong> {movie.release_date}</p>
      <p><strong>Note :</strong> {movie.vote_average}/10</p>
      <p className="mt-4">{movie.overview}</p>
    </div>
  );
};

export default Details;
