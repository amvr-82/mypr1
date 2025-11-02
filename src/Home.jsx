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

      <div className="flex justify-end  ">
        <Article
          title="5465651 TailwindCSS"
          author="21456+1"
          date="Nov 1, 2025"
          summary="sa"
          src="src\assets\20250909_1656_لوگوی حروف اناشید_simple_compose_01k4qadx83f0ps7trqrezg63ej.png"
        />
      </div>
    </div>
  );
}

export default Home;
