import Home from "./home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AbouteUs" element={<AbouteUs />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
