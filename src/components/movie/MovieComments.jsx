import React, { useState } from "react";

const MovieComments = () => {
  const [comments, setComments] = useState([
    { id: 1, user: "Alice", text: "Phim này hay quá 😍" },
    { id: 2, user: "Bob", text: "Cốt truyện hơi dài nhưng đáng xem!" },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    setComments([
      ...comments,
      { id: Date.now(), user: "Guest", text: newComment },
    ]);
    setNewComment("");
  };

  return (
    <div className="mt-12 bg-gray-900/70 backdrop-blur-md p-6 rounded-2xl shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-3">
        Comments
      </h2>

      {/* List comments */}
      <div className="space-y-5 mb-6 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
        {comments.map((c) => (
          <div
            key={c.id}
            className="flex items-start gap-3 border-b border-gray-800 pb-3 last:border-none"
          >
            {/* Avatar */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-600/80 font-bold">
              {c.user[0]}
            </div>
            {/* Comment body */}
            <div>
              <p className="text-sm text-emerald-400 font-medium">{c.user}</p>
              <p className="text-base leading-relaxed">{c.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add new comment */}
      <div className="flex gap-3">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 p-3 rounded-xl bg-gray-800/80 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
        />
        <button
          onClick={handleAddComment}
          className="px-5 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-xl font-semibold shadow-md transition"
        >
          Post
        </button>
      </div>

      {/* Custom scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #34d399;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default MovieComments;
