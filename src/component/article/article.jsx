import React from "react";

function Article({ title, author, date, summary, src }) {
  return (
    <div className="flex justify-center items-center align-middle w-full pt-10">
      <div className="w-auto h-auto   bg-gray-100 shadow-lg rounded-xl  hover:shadow-2xl hover:scale-103 transition-all  duration-300 m-4">
        <div className="p-6  items-center">
          <img
            src={src}
            className="  rounded-[15px] w-[200px] h-[200px] p-[5px] "
          ></img>
          <h2 className="text-xl font-bold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-200">
            {title}
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            By {author} | {date}
          </p>
          <p className="text-gray-700 text-base mb-4">{summary}</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">
            Read More . . .
          </button>
        </div>
      </div>
    </div>
  );
}

export default Article;
