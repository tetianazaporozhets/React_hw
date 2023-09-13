import "./App.css";
import Button from "./components/Button";

function App() {
  const click1 = () => console.log("Click 1");
  const click2 = () => console.log("Click 2");
  const click3 = () => console.log("Click 3");
  return (
    <div>
      <div className="App">Hello!</div>
      <Button text="Click 1" handleClick={click1}></Button>
      <Button text="Click 2" handleClick={click2}></Button>
      <Button text="Click 3" handleClick={click3}></Button>
    </div>
  );
}

export default App;
