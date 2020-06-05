import React, { useEffect, useState } from "react";
import news from "./components/news";
import "./App.css";
import { render } from "@testing-library/react";

const App = () => {
  // keeping the api
  const api = "https://api.covid19api.com/countries";

  const [info, setInfo] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  // Calling the api
  const getData = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setInfo(data);
    let divName = document.getElementsByClassName("App");
    for (let i = 0; i < data.length; i++) {
      let h1 = <h1>{data[i].Country}</h1>;
      console.log(data[i].Country);

      // return data[i].Country;
    }
  };
  // function to populate the app div

  // Out putting in the app
  return (
    <div className="App">
      <h1>People are Dying Bro. Shm.</h1>
      
    </div>
  );
};

export default App;
