import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ViewPaste = () => {
  const { id } = useParams();

  const allpastes = useSelector((state) => state.paste.pastes);

  const paste = allpastes.filter((p) => p._id === id)[0];

  return (
    <div className="flex flex-col items-center p-5">
      <div className="flex flex-col w-full md:w-[70%] gap-5">
        {/* Title Section */}
        <input
          className="p-3 rounded-2xl w-full border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter the Title"
          value={paste.title}
          disabled
        />
      </div>

      {/* Content Section */}
      <div className="relative mt-8 w-full md:w-[70%]">
        <textarea
          className="w-full h-64 p-4 rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={paste.content}
          placeholder="Enter your content here"
          disabled
        ></textarea>

        {/* Copy Button */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => {
              navigator.clipboard.writeText(paste?.content);
              toast.success("Copied to clipboard");
            }}
            className="p-2 rounded-2xl bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;
