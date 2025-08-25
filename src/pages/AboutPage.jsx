import React from "react";

const AboutPage = () => {
  return (
    <div className="about-page max-w-5xl mx-auto px-4 py-20 text-gray-300">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-6">
          About DinoMovie
        </h1>
        <p className="max-w-3xl mx-auto">
          DinoMovie is a free online movie platform providing top-notch
          entertainment for millions of users, focusing on quality, convenience,
          and variety. Founded with the mission to deliver a completely free
          entertainment experience, DinoMovie has become a go-to destination for
          movie lovers worldwide.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-10">
        {/* 1. User-Friendly Interface */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            1. User-Friendly Interface
          </h2>
          <p>
            DinoMovie features a clean and intuitive interface to make it easy
            for you to explore and find your favorite movies. With just a few
            clicks, you can access our diverse movie library and enjoy
            top-quality entertainment anytime, anywhere.
          </p>
        </section>

        {/* 2. Extensive Movie Library */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            2. Extensive Movie Library
          </h2>
          <p>
            DinoMovie offers thousands of movies across genres including action,
            romance, sci-fi, animation, horror, and adventure. Always updated,
            we guarantee the newest and highest-quality movies.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-300">
            <li>
              <strong>TV Series:</strong> From classic series to the latest
              shows, enjoy episodes continuously.
            </li>
            <li>
              <strong>Feature Films:</strong> Popular blockbusters from
              Hollywood, Asia, and independent hits.
            </li>
            <li>
              <strong>Vietnamese Movies:</strong> Regularly updated Vietnamese
              films for local fans.
            </li>
          </ul>
        </section>

        {/* 3. Video Quality */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            3. High-Quality Video - HD to 4K
          </h2>
          <p>
            DinoMovie provides movies in multiple resolutions from HD to 4K,
            suitable for all internet speeds and viewer needs. Enjoy crisp
            visuals and immersive sound, just like watching in a theater.
          </p>
        </section>

        {/* 4. Key Features */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            4. Key Features
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-300">
            <li>
              <strong>Completely Free:</strong> Watch movies without any
              charges.
            </li>
            <li>
              <strong>Fast Updates:</strong> Our team constantly updates the
              latest movies.
            </li>
            <li>
              <strong>Watch Anytime, Anywhere:</strong> Multi-platform support:
              PC, mobile, smart devices.
            </li>
          </ul>
        </section>

        {/* 5. Commitment */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            5. Our Commitment
          </h2>
          <p>
            DinoMovie is committed to providing the best service and protecting
            user rights. We continuously improve to ensure a perfect
            movie-watching experience. User privacy and security are our top
            priorities.
          </p>
        </section>

        {/* 6. Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            6. Contact Us
          </h2>
          <p>
            For more details or inquiries, please contact us via email:{" "}
            <a
              href="mailto:lienhe@dinomovie.com"
              className="text-emerald-500 underline"
            >
              lienhe@dinomovie.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
