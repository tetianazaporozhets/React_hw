import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="./">Go to main page</Link>
    </div>
  );
};
export default PageNotFound;
