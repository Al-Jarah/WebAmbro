import React from 'react';
import './App.css';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import CurrentlyServicing from './components/CurrentlyServicing/CurrentlyServicing';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AllServices from './components/Services/Services';
import AppDevelopment from './components/Services/AppDevelopment/AppDevelopment';
import WebDevelopment from './components/Services/WebDevelopment/WebDevelopment';
import Hosting from './components/Services/Hosting/Hosting';
import Maintanence from './components/Services/Maintanence/Maintanence';
import CustomSoftware from './components/Services/CustomSoftware/CustomSoftware';

function App() {
  return (
    <div className="App">
        <CustomNavbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/CurrentlyServicing" component={CurrentlyServicing} />
            <Route path="/About" component={AboutUs} />
            <Route path="/Contact" component={Contact} />
            <Route path="/AllServices" component={AllServices} />
            <Route path="/AppDevelopment" component={AppDevelopment} />
            <Route path="/WebDevelopment" component={WebDevelopment} />
            <Route path="/Hosting" component={Hosting} />
            <Route path="/Maintanence" component={Maintanence} />
            <Route path="/CustomSoftware" component={CustomSoftware} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
