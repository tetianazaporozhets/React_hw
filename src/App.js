import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import AllPosts from "./pages/AllPosts";
import Post from "./pages/Post";
import HomeWorkPage from "./pages/HomeWorkPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Main Page</NavLink>
        <NavLink to="/posts/:id">Post</NavLink>
        <NavLink to="/posts">All posts</NavLink>
        <NavLink to="/homeworkpage">My homeworks</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/homeworkpage" element={<HomeWorkPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
