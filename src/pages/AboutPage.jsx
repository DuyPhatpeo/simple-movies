import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Section 1 - Intro */}
        <section className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">
            DinoMovie - Free Online Movie Platform
          </h1>
          <p className="text-gray-300 leading-relaxed">
            DinoMovie is a free online movie platform providing top-notch
            entertainment for millions of users, focusing on quality,
            convenience, and variety. Founded with the mission to deliver a
            completely free entertainment experience, DinoMovie has become a
            go-to destination for movie lovers worldwide.
          </p>
        </section>

        {/* Section 2 - User-Friendly Interface */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">User-Friendly Interface</h2>
          <p className="text-gray-300 leading-relaxed">
            DinoMovie features a clean and intuitive interface to make it easy
            for you to explore and find your favorite movies. With just a few
            clicks, you can access our diverse movie library and enjoy
            top-quality entertainment anytime, anywhere.
          </p>
        </section>

        {/* Section 3 - Extensive Movie Library */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Extensive Movie Library</h2>
          <p className="text-gray-300 leading-relaxed">
            DinoMovie offers thousands of movies across genres including action,
            romance, sci-fi, animation, horror, and adventure. Always updated,
            we guarantee the newest and highest-quality movies.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
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

        {/* Section 4 - Video Quality */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            High-Quality Video - HD to 4K
          </h2>
          <p className="text-gray-300 leading-relaxed">
            DinoMovie provides movies in multiple resolutions from HD to 4K,
            suitable for all internet speeds and viewer needs. Enjoy crisp
            visuals and immersive sound, just like watching in a theater.
          </p>
        </section>

        {/* Section 5 - Key Features */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
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

        {/* Section 6 - Commitment */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Commitment</h2>
          <p className="text-gray-300 leading-relaxed">
            DinoMovie is committed to providing the best service and protecting
            user rights. We continuously improve to ensure a perfect
            movie-watching experience. User privacy and security are our top
            priorities.
          </p>
        </section>

        {/* Section 7 - Contact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-gray-300 leading-relaxed">
            For more details or inquiries, please contact us via email:{" "}
            <a
              href="mailto:lienhe@dinomovie.com"
              className="text-blue-400 underline"
            >
              lienhe@dinomovie.com
            </a>{" "}
            or visit the Contact page on our official website.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
