import { useState } from "react";
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, password: ${password}`);
  };
  return (
    <form className="login" onSubmit={handleSubmitForm}>
      <input
        type="text"
        value={email}
        placeholder="Input 1"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={handleChangePassword}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Login;
