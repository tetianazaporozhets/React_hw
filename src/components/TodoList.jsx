import TodoItem from "./TodoItem";
const TodoList = (props) => {
  const { items, onDelete } = props;
  return (
    <div>
      {items.map((item) => (
        <TodoItem key={item.title} title={item.title} onDelete={onDelete} />
      ))}
    </div>
  );
};
export default TodoList;
