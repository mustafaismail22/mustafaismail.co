import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-white dark:bg-zinc-900">
      <h1 className="text-3xl font-bold text-black dark:text-white">
        Hello world!
      </h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
