import Button from "@components/common/Button";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navigate = useNavigate();

  return (
    <div
      className="movie-card relative flex flex-col rounded-3xl overflow-hidden text-white h-[500px] select-none cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
      onClick={() => navigate(`/movies/${id}`)}
    >
      {/* Poster background */}
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />

      {/* Overlay gradient để chữ nổi bật */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col justify-end h-full bg-gradient-to-t from-black/30 via-transparent to-transparent">
        <h3 className="text-2xl font-extrabold mb-3 line-clamp-2 drop-shadow-lg">
          {title}
        </h3>

        <div className="flex items-center justify-between text-sm opacity-90 mb-6">
          <span className="font-medium">
            {new Date(release_date).getFullYear()}
          </span>
          <span className="flex items-center gap-1 font-semibold text-yellow-400 drop-shadow-sm">
            <FaStar />
            {vote_average.toFixed(1)}
          </span>
        </div>
        <Button onClick={() => navigate(`/movies/${id}`)}>Watch Now</Button>
      </div>
    </div>
  );
};

export default MovieCard;
