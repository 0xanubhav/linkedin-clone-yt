import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import Feed from "./Feed";
import { selectUser, selectcounter } from "./features/userSlice";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { login } from "./features/userSlice";
import { logout } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const counter=useSelector(selectcounter)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />

      {!user? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
