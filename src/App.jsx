import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import About from "./page/About";

function App() {
  return (
    <Routes>
        <Route index element={<Main />} />
        <Route path='/about' element={<About />} />
    </Routes>
  );
}

export default App;
