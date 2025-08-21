import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 py-10 text-white">
        <span className="text-pink-600">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[300px] page-container">
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-lg"></div>
          <img
            src="https://th.bing.com/th/id/R.54a3122864faffd83798f808429e9ce0?rik=%2fxamNDznrzD80w&riu=http%3a%2f%2fmoviefail.com%2fwp-content%2fuploads%2f2012%2f05%2favengers-4.jpeg&ehk=AUMutxE%2fsMSL5vL3Mxxhk91UTsob%2bMTNY78I%2fxjlXac%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-3">Avenger</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="py-2 px-4 border border-white rounde-md">
                Action
              </span>
              <span className="py-2 px-4 border border-white rounde-md">
                Adventure
              </span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-pink-600 text-white font-medium">
              Watch Now
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
