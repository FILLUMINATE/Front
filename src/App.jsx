import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import About from "./page/About";
import Categories from "./page/Categories";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
