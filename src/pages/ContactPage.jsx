import React from "react";

const ContactPage = () => {
  return (
    <div className="contact-page max-w-5xl mx-auto px-4 py-20 text-gray-300">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-6">
          Contact
        </h1>
        <p className="max-w-3xl mx-auto">
          Welcome to DinoMovie’s Contact page! We are always ready to listen and
          support you to ensure the best experience when using our service. If
          you have any questions, feedback, or requests for assistance, please
          reach out to us through the information below.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-10">
        {/* 1. Main Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            1. Main Contact Information
          </h2>
          <p className="mb-3">
            <span className="font-medium text-emerald-400">
              Customer Support Email:
            </span>{" "}
            support@dinomovie.com
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-white">Account Issues:</span>{" "}
              Forgot password, login problems, or any other account-related
              issues.
            </li>
            <li>
              <span className="font-medium text-white">Technical Support:</span>{" "}
              Troubles while watching movies, video quality concerns, or other
              errors when using our website.
            </li>
            <li>
              <span className="font-medium text-white">
                Feedback & Suggestions:
              </span>{" "}
              We truly value your feedback to help improve our service quality.
            </li>
          </ul>
          <p className="mt-4">
            <span className="font-medium text-emerald-400">
              Privacy Policy Inquiries:
            </span>{" "}
            support@dinomovie.com
          </p>
          <p>
            For all questions related to data security and DinoMovie’s privacy
            policies.
          </p>
        </section>

        {/* 2. Connect via Social Media */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            2. Connect via Social Media
          </h2>
          <p>
            Besides email, you can also reach out and stay updated with the
            latest news from DinoMovie through our social media channels.
          </p>
        </section>

        {/* 3. FAQ */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            3. Frequently Asked Questions (F.A.Q)
          </h2>
          <p>
            Before submitting a support request, you may want to visit our{" "}
            <span className="text-emerald-400 font-medium">F.A.Q page</span> to
            quickly find answers to the most common issues:{" "}
            <span className="italic">F.A.Q – DinoMovie</span>.
          </p>
        </section>

        {/* Outro */}
        <section className="mt-10 text-center">
          <p className="mb-2">
            We are happy to assist you and look forward to bringing you the best
            online movie experience!
          </p>
          <p className="text-emerald-400 font-semibold">
            DinoMovie – Explore the world of entertainment with us, safe, free,
            and diverse!
          </p>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
