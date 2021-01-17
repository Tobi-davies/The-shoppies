import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import SearchField from "./components/search/search.component";
import DisplayResult from "./components/display/display.components";
import Header from "./components/header/header.component";
import NomineeList from "./components/nominee-list/nominee.component";
import { Route, Switch } from "react-router-dom";

function App() {
  // const [search, updateSearch] = useState("");

  const [results, updateResults] = useState([]);

  // console.log(results);

  // const apiKey = "1813ba2c";

  // const url = `www.omdbapi.com/?apikey=${apiKey}&t=${search}`;
  // console.log(url);

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  //   // eslint-disable-next-line
  // }, []);
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact>
          <SearchField updateResults={updateResults} />
          <DisplayResult results={results} />
        </Route>
        <Route path="/nominees" component={NomineeList} />
      </Switch>
    </div>
  );
}

export default App;
