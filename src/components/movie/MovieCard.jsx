import React from "react";

const MovieCard = () => {
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
      <img
        src="https://th.bing.com/th/id/R.54a3122864faffd83798f808429e9ce0?rik=%2fxamNDznrzD80w&riu=http%3a%2f%2fmoviefail.com%2fwp-content%2fuploads%2f2012%2f05%2favengers-4.jpeg&ehk=AUMutxE%2fsMSL5vL3Mxxhk91UTsob%2bMTNY78I%2fxjlXac%3d&risl=&pid=ImgRaw&r=0"
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className=" text-xl font-bold mb-3">Avengers: Endgame</h3>
      <div className="flex items-center justify-between text-sm opacity-50 mb-10">
        <span className="">2017</span>
        <span className="">7.4</span>
      </div>
      <button className="py-3 px-6 rounded-lg capitalize bg-pink-600 text-white  w-full">
        Watch Now
      </button>
    </div>
  );
};

export default MovieCard;
