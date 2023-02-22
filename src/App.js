import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import NavBar from "./components/navbar";
import { useState } from "react";
import Home from "./components/home";
import Footer from "./components/footer";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [darkModeValue, setDarkModeValue] = useState('fantasy');

  return (
    <Router>
      <div>
        <NavBar isChecked={isChecked} setDarkModeValue={setDarkModeValue} darkModeValue={darkModeValue} setIsChecked={setIsChecked} />
        <div>
          <Switch>
            <Route exact path='/'>
              <Home darkModeValue={darkModeValue} />
            </Route>
          </Switch>
        </div>
        <Footer darkModeValue={darkModeValue} />
      </div>
    </Router>

  );
}

export default App;
