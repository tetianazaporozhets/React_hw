import { useContext } from "react";
import { AppContext } from "../context/ContextProvider";

const List = () => {
  const tasks = useContext(AppContext);
  if (!tasks || tasks.length === 0) {
    return <div>No tasks available.</div>;
  }
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
};
export default List;
