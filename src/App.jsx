import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  useEffect(() => {
    // Make the fetch request here
    fetch("http://localhost:3000/shop")
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  return <div></div>;
}

export default App;
