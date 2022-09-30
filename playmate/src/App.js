import React from "react";
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PetCards from "./PetCards";
import Signup from "./SignUp";
import SwipeButtons from './SwipeButtons';
import Matchess from './Matches';
import ChatScreen from "./ChatScreen";
import MainPageee from "./MainPageee";


function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
      <Switch>
      <Route path="/chat">
          <ChatScreen />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/petSit">
          <h1>I am Pet Sit page</h1>
        </Route>
        <Route path="/Vet">
       
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
