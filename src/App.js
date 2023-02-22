import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import NavBar from "./components/navbar";
import { useState } from "react";
import Home from "./components/home";
import Footer from "./components/footer";
import Stat from "./components/stat";
import Cards from "./components/cards";
import Error from "./components/error";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [darkModeValue, setDarkModeValue] = useState('fantasy');

  return (
    <Router>
      <div className="">
        <NavBar isChecked={isChecked} setDarkModeValue={setDarkModeValue} darkModeValue={darkModeValue} setIsChecked={setIsChecked} />
        <div>
          <Switch>
            <Route exact path='/'>
              <Home darkModeValue={darkModeValue} />
              <Stat darkModeValue={darkModeValue} />
              <Cards darkModeValue={darkModeValue} />
            </Route>

            <Route path='*'>
              <Error />
            </Route>
          </Switch>
        </div>
        <Footer darkModeValue={darkModeValue} />
      </div>
    </Router>

  );
}

export default App;
