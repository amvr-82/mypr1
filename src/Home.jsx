import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Article from "./components/Article/Article";

function Home() {
  const mozo = ["technology", "ai", "react", "design", "startup", "coding"];

  const articles = mozo.map((topic, i) => ({
    title: `مقاله درباره ${topic}`,
    author: i % 2 === 0 ? "من" : "سامان",
    date: `Nov ${i + 1}, 2025`,
    summary: `این خلاصه‌ای کوتاه از مقاله ${topic} هست.`,
    src: `https://source.unsplash.com/400x250/?${topic}&sig=${i}`,
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <h2 className="mt-[85px] p-5 flex justify-end font-bold text-[25px] text-gray-800">
        سلام بر مقاله‌ها 😎
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </div>
  );
}

export default Home;
