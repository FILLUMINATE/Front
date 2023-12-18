import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import About from "./page/About";
import Feed from "./page/Feed/Feed";
import FeedDetail from "./page/Feed/FeedDetail";
import FeedWrite from "./page/Feed/FeedWrite";
import Categories from "./page/Categories";
import Project from "./page/Project";
import ProjectDetail from "./page/Projects/ProjectDetail";
import CategoriesDetail from "./page/category/CategoriesDetail";
import ProjectWrite from "./page/Projects/ProjectWrite";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { UserProvider } from "../src/context/UserContext";

function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/feed/write" element={<FeedWrite />} />
          <Route path="/feed/:id" element={<FeedDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:id" element={<CategoriesDetail />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/project/write" element={<ProjectWrite />} />
        </Routes>
      </QueryClientProvider>
    </UserProvider>
  );
}

export default App;
