import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="w-full h-[350px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="flex items-center justify-between text-sm opacity-80 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            {vote_average.toFixed(1)}
          </span>
        </div>
        <button
          onClick={() => navigate(`/movies/${id}`)}
          className="py-3 px-6 rounded-lg capitalize bg-pink-600 text-white w-full mt-auto hover:bg-pink-700 transition"
        >
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
