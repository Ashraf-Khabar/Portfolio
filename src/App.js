import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import NavBar from "./components/navbar";
import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [darkModeValue, setDarkModeValue] = useState('halloween');

  return (
    <Router>
      <div className="App">
        <NavBar isChecked={isChecked} setDarkModeValue={setDarkModeValue} darkModeValue={darkModeValue} setIsChecked={setIsChecked}/>
        <div className="container">
          <Switch>
            <Route>
              
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
