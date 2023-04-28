/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from "react-redux";
// import "./App.css";
import { getUsers } from "./Redux/userSlice";
import { useEffect } from "react";
import Profile from "./Profile";
import Login from "./Login";
function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className="App" style={{ padding: "3rem" }}>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          {users.map((user) => {
            return (
              <div key={user.id}>
                {user.id}-{user.name}
              </div>
            );
          })}
        </div>
      )}
      <Profile />
      <Login />
    </div>
  );
}

export default App;
