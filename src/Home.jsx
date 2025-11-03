import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Article from "./component/Article/Article";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles([
      {
        title: "دیتا اول",
        author: "من ",
        date: "Nov 1, 2025",
        summary: "خلاصه 1",
        src: "./src/assets/aks.avif",
      },
      {
        title: "دیتا اول",
        author: "من ",
        date: "Nov 1, 2025",
        summary: "خلاصه 1",
        src: "./src/assets/aks.avif",
      },
      {
        title: " دیتا دوم",
        author: "سامان",
        date: "Nov 2, 2025",
        summary: "خلاصه دوم",
        src: "./src/assets/aks.avif",
      },
      {
        title: "دیتا اول",
        author: "من ",
        date: "Nov 1, 2025",
        summary: "خلاصه 1",
        src: "./src/assets/aks.avif",
      },
      {
        title: " دیتا دوم",
        author: "سامان",
        date: "Nov 2, 2025",
        summary: "خلاصه دوم",
        src: "./src/assets/aks.avif",
      },
    ]);
  }, []);

  return (
    <div>
      <Navbar />

      <div>
        <h2 className="mt-[85px] p-5 flex justify-end font-bold text-[25px]">
          سلام بر مقاله
        </h2>
      </div>

      <div className="grid grid-cols-4 items-end gap-4 p-4">
        {articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </div>
  );
}

export default Home;
