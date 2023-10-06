const TodoItem = ({ title, onDelete }) => {
  return (
    <div className="todo__item">
      <h4>{title}</h4>
      <button onClick={() => onDelete(title)}>Delete</button>
    </div>
  );
};
export default TodoItem;
