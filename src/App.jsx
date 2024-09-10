// src/App.js
import React from "react";
import UserList from "./components/UserList";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>CRUD App with Axios</h1>
      <UserList />
    </div>
  );
};

export default App;
