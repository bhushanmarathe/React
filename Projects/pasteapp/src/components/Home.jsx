import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPaste, updateToPaste } from "../redux/pasteSlice";
import toast from "react-hot-toast"; // For toast notifications

const Home = () => {
  const [title, setTile] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const pasteId = searchParams.get("pasteId");

  const allPastes = useSelector((state) => state.paste.pastes);

  const dispatch = useDispatch();

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTile(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(20),
      createdAt: new Date().toLocaleString(),
    };

    if (pasteId) {
      // update
      dispatch(updateToPaste(paste));
    } else {
      // create
      dispatch(addToPaste(paste));
    }

    // After creation or update
    setTile("");
    setValue("");
    setSearchParams({});
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(value); // Copy the text to clipboard
    toast.success("Content copied to clipboard!"); // Show success notification
  };

  return (
    <div className="flex flex-col items-center p-5">
      {/* Title and Button Section */}
      <div className="flex flex-col md:flex-row gap-5 w-full justify-between items-center">
        <input
          className="p-2 rounded-2xl w-full md:w-[67%] border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter the Title"
          value={title}
          onChange={(e) => setTile(e.target.value)}
        />
        <button
          onClick={createPaste}
          className="mt-5 md:mt-0 p-2 rounded-2xl bg-blue-500 text-white w-full md:w-auto hover:bg-blue-600 transition-colors"
        >
          {pasteId ? "Update my paste" : "Create my paste"}
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-8 w-full">
        <textarea
          className="w-full h-60 p-4 rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          placeholder="Enter your content here"
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>

      {/* Copy Button */}
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={handleCopy}
          className="p-2 rounded-xl bg-green-500 text-white flex items-center space-x-2 hover:bg-green-600 transition-colors"
        >
          <span>Copy</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 9l4 4-4 4m4-4H7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Home;
