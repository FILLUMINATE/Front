import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import About from "./page/About";
import Feed from "./page/Feed/Feed";
import FeedDetail from "./page/Feed/FeedDetail";
import FeedWrite from "./page/Feed/FeedWrite";
import Categories from "./page/Categories";
import Project from "./page/Project";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/feed/write" element={<FeedWrite />} />
      <Route path="/feed/:id" element={<FeedDetail />} />
      <Route index element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
}

export default App;
