import { createContext, useState } from "react";
import Tasks from "../Tasks/Tasks";

export const AppContext = createContext(null);
const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const handleAddNewTask = () => {
    const items = [...tasks, name];
    setTasks(items);
  };
  return (
    <div>
      <AppContext.Provider value={tasks}>{children}</AppContext.Provider>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddNewTask}>Create new task!</button>
      <Tasks />
    </div>
  );
};
export default ContextProvider;
