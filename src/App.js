import React, { useEffect, useState } from "react";
import news from "./components/news";
import "./App.css";

const App = () => {
  // keeping the api
  const api = "https://api.covid19api.com/";

  const [info, setInfo] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  // Calling the api
  const getData = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setInfo(data.countriesRoute);
    console.log(data.countriesRoute);
  };

  // Out putting in the app
  return (
    <div className="App">
      Displaying info to the frontend
      {/* Having problem with info.map and displaying info to the page */}
      {info.map((infos) => (
        <news
          Name={infos.countriesRoute.Name}
          description={infos.countriesRoute.description}
        />
      ))}
    </div>
  );
};

export default App;
