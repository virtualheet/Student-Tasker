import "./App.css";
import TaskManagerPage from "./Components/TaskManagerPage";
import LoginPage from "./Components/LoginPage";
import { useState } from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      <div className="background" />
      <TaskManagerPage /> 
    </div>
  );
};

export default App;
