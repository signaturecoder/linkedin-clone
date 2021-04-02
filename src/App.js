import React from "react";
import "./App.css";
import Header from "./app/Header";
import Sidebar from "./app/Sidebar";
import Feed from "./app/Feed";

function App() {
  return (
    <div>
      {/* header */}
      <Header />
      {/* app body */}
      <div className="app__body">
      {/* sidebar */}
        <Sidebar />
      {/* feeds */}
      <Feed />
      {/* widgets */}
      </div>
    </div>
  );
}

export default App;
