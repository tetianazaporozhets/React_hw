import { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";

const List = () => {
  const tasks = useContext(AppContext);
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
