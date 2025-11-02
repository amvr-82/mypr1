import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Article from "./component/Article/Article";

function Home() {
  return (
    <div>
      <Navbar />

      <div>
        <h2 className="mt-[85px] p-5 flex justify-end font-bold text-[25px]">
          سلام بر مقاله
        </h2>
      </div>

      <Article
        title="Mastering TailwindCSS"
        author="145"
        date="Nov 1, 2025"
        summary="sa"
      />
    </div>
  );
}

export default Home;
