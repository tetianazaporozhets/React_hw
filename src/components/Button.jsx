import "./Button.css";

const Button = (props) => {
  const sayHello = () => console.log("Hello!");
  return (
    <button className="button" onClick={sayHello}>
      {props.text}
    </button>
  );
};
export default Button;
