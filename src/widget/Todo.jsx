import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import { useState } from "react";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const handleTodoAdd = (todoName) => {
    const todo = {
      title: todoName,
    };
    const newArray = [...todos, todo];
    setTodos(newArray);
  };
  const handleTodoDelete = (title) => {
    const newArray = todos.filter((todo) => todo.title !== title);
    setTodos(newArray);
  };
  return (
    <div className="todo">
      <AddTodoForm onCreate={handleTodoAdd} />
      <TodoList items={todos} onDelete={handleTodoDelete} />
    </div>
  );
};
export default Todo;
