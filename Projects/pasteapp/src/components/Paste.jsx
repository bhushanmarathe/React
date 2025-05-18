import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPaste } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPaste(pasteId));
  }

  function handleShare(paste) {
    if (navigator.share) {
      navigator
        .share({
          title: paste.title,
          text: paste.content,
          url: window.location.href,
        })
        .then(() => {
          toast.success("Shared successfully!");
        })
        .catch((err) => {
          toast.error("Failed to share. Please try again.");
          console.error("Error sharing:", err);
        });
    } else {
      const shareUrl = `mailto:?subject=${paste.title}&body=${paste.content}`;
      window.open(shareUrl, "_blank");
    }
  }

  return (
    <>
      {/* Search Bar */}
      <div className="flex justify-center mt-5">
        <input
          className="p-2 rounded-2xl min-w-[600px] border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="search"
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Display Pastes in Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {filteredData.length > 0 &&
          filteredData.map((paste) => (
            <div
              className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              key={paste?._id}
            >
              <div className="font-semibold text-xl mb-2">{paste.title}</div>
              <div className="text-gray-700 mb-4">{paste.content}</div>

              <div className="flex flex-wrap gap-4 justify-between mb-4">
                <Link to={`/?pasteId=${paste?._id}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                    Edit
                  </button>
                </Link>

                <Link to={`/pastes/${paste?._id}`}>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
                    View
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(paste?._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(paste?.content);
                    toast.success("Copied to clipboard");
                  }}
                  className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors"
                >
                  Copy
                </button>

                <button
                  onClick={() => handleShare(paste)}
                  className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition-colors"
                >
                  Share
                </button>
              </div>

              <div className="text-sm text-gray-500">{paste.createdAt}</div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Paste;
