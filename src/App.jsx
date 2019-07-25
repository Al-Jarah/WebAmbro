import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CurrentlySupporting from './components/CurrentlyServicing';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <CustomNavbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Currentlysupporting" component={CurrentlySupporting} />
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/Contact" component={Contact} />
        </Switch>
    </div>
  );
}

export default App;
