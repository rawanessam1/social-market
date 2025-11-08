import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaHouse } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import Post from "./Post";

const PostsList = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((post) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      post.username.toLowerCase().includes(lowerSearch) ||
      post.content.toLowerCase().includes(lowerSearch)
    );
  });

  return (
    <div className="posts flex-1 p-10 flex flex-col gap-8 ml-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-1/3">
          <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
            <FaHouse className="text-pink-500 text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
            <FaRegHeart className="text-pink-500 text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
            <button className="flex items-center gap-2 bg-linear-to-r from-pink-400 to-yellow-400 text-white font-medium px-5 py-2 
            rounded-xl shadow-md transition duration-300 hover:scale-105 hover:shadow-pink-200">
              <IoIosAddCircleOutline className="text-2xl"/> Add Post
            </button>
          </div>
      </div>

      <h1 className="font-bold text-2xl">Feed</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-transparent">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default PostsList;
