import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import About from "./page/About";
import Categories from "./page/Categories";
import Project from "./page/Project"

function App() {
  return (
    <Routes>
        <Route index element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/project' element={<Project />} />
    </Routes>
  );
}

export default App;
