import React from "react";
import Article from "./component/Article";
import Navbar from "./component/Navbar/Navbar";

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
        author="Amirhossein"
        date="Nov 1, 2025"
        summary="A guide to using TailwindCSS for building modern, responsive UIs quickly."
      />
    </div>
  );
}

export default Home;
