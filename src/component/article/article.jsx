import React from "react";

function Article({ title, author, date, summary }) {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 m-4">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-200">
          {title}
        </h2>
        <p className="text-gray-500 text-sm mb-4">
          By {author} | {date}
        </p>
        <p className="text-gray-700 text-base mb-4">{summary}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Article;
