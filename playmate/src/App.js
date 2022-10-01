import React from "react";
import './App.css';
import Header from './Header';
import petSit from './petSit';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PetCards from "./PetCards";

import Signup from "./SignUp";
import SwipeButtons from './SwipeButtons';
import Matchess from './Matches';
import ChatScreen from "./ChatScreen";
import MainPageee from "./MainPageee";
import SearchVet from "./VetPage";
import SearchResult from "./VetSearchResult";

function App() {
  
  return (
    <div className="App">
      
      { /* the router is used to navigate between different pages */ }

      <Router>

      { /* header is placed outside of the switch so that no matter what page you are on header will always be shown */ }
      <Header />

      { /*switch is used to navigate through the different pages. Route paths are shown for each sub page*/ }
      <Switch>
      <Route path="/chat">
          <ChatScreen />
        </Route>
        <Route path="/VetResult">
          <SearchResult />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/petSit">
          <petSit />
        </Route>
        <Route path="/Vet">
          <SearchVet/>
        </Route>
        <Route path="/meet">
        <Matchess />
        <ChatScreen />
        <PetCards />
        <SwipeButtons />
        </Route>
        <Route path="/">
        <MainPageee />
        </Route>
      </Switch>
    </Router>
    

      

    </div>
  );
}


export default App;
