import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import "./index.css";

ReactGA.initialize("UA-43653001-4");

function App() {
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="flex overflow-hidden justify-center items-center h-screen w-screen bg-white dark:bg-black">
      <h1
        data-text="Hello World!"
        className="glitch font-bold dark:text-white bg-inherit text-[12vw] sm:text-[10vw] "
      >
        Hello World!
      </h1>
      <div className="scanlines"></div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
