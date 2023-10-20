import { NavLink, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import AllPosts from "./pages/AllPosts";
import Post from "./pages/Post";
import HomeWorkPage from "./pages/HomeWorkPage";
import PageNotFound from "./pages/PageNotFound";
import Tasks from "./components/Tasks/Tasks";

export const Context = createContext(null);
function App() {
  const [tasks, setTasks] = useState(["React", "Redux"]);
  const [name, setName] = useState("");
  const handleAddNewTask = () => {
    const items = [...tasks, name];
    setTasks(items);
  };
  return (
    <Context.Provider value={tasks}>
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

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAddNewTask}>Create new task!</button>
        <Tasks />
      </div>
    </Context.Provider>
  );
}

export default App;
