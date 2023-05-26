import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import NavBar from "./components/navbar";
import { useState } from "react";
import Home from "./components/home";
import Footer from "./components/footer";
import Stat from "./components/stat";
import Cards from "./components/cards";
import Error from "./components/error";
import About from "./components/about";
import Hobies from "./components/hobies";
import Portfolio from "./components/projects/portfolio";
import SocialMedia from "./components/socialmedia";
import Resumes1 from "./components/MyResumes/Resumes1";
import Portfolio2 from "./components/projects/portfolio2";
import FlaskoSQL from "./components/flaskoSQL/flaskosql";
import Timos from "./components/timos/timos";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [darkModeValue, setDarkModeValue] = useState('forest');

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

            <Route path='/about'>
              <About darkModeValue={darkModeValue} />
              <SocialMedia />
              <Hobies darkModeValue={darkModeValue}/>
            </Route>

            <Route exact path='/portfolio' >
              <Portfolio darkModeValue={darkModeValue} />
            </Route>

            <Route path='/portfolio/2' >
              <Portfolio2 darkModeValue={darkModeValue} />
            </Route>

            <Route path='/resumes' >
              <Resumes1 darkModeValue={darkModeValue} />
            </Route>

            <Route path='/timos' >
              <Timos darkModeValue={darkModeValue} />
            </Route>

            <Route path='/flaskoSQL' >
              <FlaskoSQL darkModeValue={darkModeValue} />
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
