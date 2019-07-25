import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CurrentlySupporting from './components/CurrentlyServicing';
import AllServices from './components/AllServices';
import AboutUs from './components/AboutUs';
import Contact from'./components/Contact';
import Hosting from './components/services/Hosting';
import WebDev from './components/services/WebDev';
import AppDev from './components/services/AppDev';
import WebMaintanence from './components/services/WebMaintanence'

function App() {
  return (
    <div className="App">
        <CustomNavbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Currentlysupporting" component={CurrentlySupporting} />
            <Route path="/AllServices" component={AllServices} />
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/Contact" component={Contact}/>
            <Route path="/Hosting" component={Hosting} />
            <Route path="/WebDev" component={WebDev} />
            <Route path="/AppDev" component={AppDev} />
            <Route path="/WebMaintanence" component={WebMaintanence} />
        </Switch>
    </div>
  );
}

export default App;
