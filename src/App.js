import "./App.css";
import Card from "./components/Card/Card";
function App() {
  const course1 = {
    image:
      "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
    level: "Beginner",
    title: "Introduction Basic Programming HTML & CSS",
    user: {
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
      name: "John Doe",
    },
    rating: 4.5,
    students: 1234,
    modules: 5,
    duration: 5400,
  };
  const course2 = {
    image:
      "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
    level: "Beginner",
    title: "Introduction Basic Programming HTML & CSS",
    user: {
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
      name: "John Doe",
    },
    rating: 4.5,
    students: 1234,
    modules: 10,
    finishedModules: 5,
    duration: 5400,
  };
  return (
    <div>
      <Card course={course1} />
      <Card course={course2} isMyCourse={true} />
    </div>
  );
}

export default App;
