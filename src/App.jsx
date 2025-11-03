import Home from "./home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route />
      <Route />
      <Route />
    </Routes>
  );
}

export default App;
