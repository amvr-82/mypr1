import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Article from "./component/Article/Article";
import axios from "axios";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/articles")
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.error("خطا در گرفتن مقاله‌ها:", err);
      });
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
        {Array.isArray(articles) &&
          articles.map((article, index) => (
            <Article key={index} {...article} />
          ))}
      </div>
    </div>
  );
}

export default Home;
