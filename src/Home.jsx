import Navbar from "./component/navabr/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <div>
        <h2 className="mt-[65px] p-5 mt-10 flex justify-end font-bold text-[25px]">
          سلام بر مقاله
        </h2>
      </div>
    </div>
  );
}

export default Home;
