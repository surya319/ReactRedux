/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from "react-redux";
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
    <div className="App position-relative" style={{ padding: "3rem" }}>
      {loading ? (
        <div
          className="spinner-border text-primary position-absolute top-50 start-50"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
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
