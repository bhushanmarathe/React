import { useState } from "react";
import "./App.css";
import Logout from "./components/Logout";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <h1>Welcome</h1>
      <div>{isLoggedIn && <Logout />}</div>
    </div>
  );

  // return <div>{isLoggedIn ? <Login /> : <Logout />}</div>;

  // if (isLoggedIn) {
  //   return <Logout />;
  // } else {
  //   return <Login />;
  // }
}

export default App;
