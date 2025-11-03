import Home from "./home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<AbouteUs />} />
      <Route path="/" element={<Contact />} />
      <Route path="/" element={<Blog />} />
    </Routes>
  );
}

export default App;
