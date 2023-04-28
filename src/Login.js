import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./Redux/CodeSlice";
export default function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const loginBtn = () => {
    dispatch(
      login({
        name: name,
        age: age,
        email: email,
      })
    );
    setName("");
    setAge(0);
    setEmail("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          name=""
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="email"
          name=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={loginBtn}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
