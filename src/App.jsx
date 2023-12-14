import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import About from "./page/About";
import Feed from "./page/Feed/Feed";
import FeedDetail from "./page/Feed/FeedDetail";
import FeedWrite from "./page/Feed/FeedWrite";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/feed/write" element={<FeedWrite />} />
      <Route path="/feed/:id" element={<FeedDetail />} />
    </Routes>
  );
}

export default App;
