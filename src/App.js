import React from "react";
import "./App.css";
import Header from "./app/Header";
import Sidebar from "./app/Sidebar";

function App() {
  return (
    <div>
      {/* header */}
      <Header />
      {/* app body */}
      <div className="app__body">
        <Sidebar />
      {/* sidebar */}
      {/* feeds */}
      {/* widgets */}
      </div>
    </div>
  );
}

export default App;
