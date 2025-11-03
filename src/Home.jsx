import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Article from "./component/Article/Article";
import Footer from "./component/Footer/Footer";
import axios from "axios";

function Home() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/articles")
      .then((res) => {
        if (Array.isArray(res.data.data)) {
          setArticles(res.data.data);
        } else {
          console.error("داده دریافتی آرایه نیست:", res.data.data);
          setArticles([]);
        }
      })
      .catch((err) => {
        console.error("خطا در گرفتن مقاله‌ها:", err);
        setError("مشکلی در ارتباط با سرور پیش آمد 😕");
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div>
        <h2 className="mt-[85px] p-5 flex justify-end font-bold text-[25px]">
          سلام بر مقاله
        </h2>
      </div>
      {loading && (
        <p className="text-center text-gray-500 mt-10">در حال بارگذاری...</p>
      )}
      <p className="text-center text-red-500 mt-10">{error}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {articles.length > 0 ? (
          articles.map((article, index) => <Article key={index} {...article} />)
        ) : (
          <p className="col-span-full text-center text-gray-400">
            هنوز مقاله‌ای وجود ندارد 😅
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
