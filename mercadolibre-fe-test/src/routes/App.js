import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Searcher from "../components/Searcher";
import Products from "../components/Products";
import Results from "../components/Results";
import "../assets/styles/App.scss";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Route path="/" component={Searcher} />
          <Route path="/items?search=" component={Products} />
          <Route path="/items/:id" component={Results} />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
