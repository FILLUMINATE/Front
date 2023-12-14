import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import About from "./page/About";
import Feed from "./page/Feed";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
}

export default App;
