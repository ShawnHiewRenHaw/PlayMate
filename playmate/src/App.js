import React from "react";
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PetCards from "./PetCards";
import Signup from "./SignUp";
import SwipeButtons from './SwipeButtons';
import Chats from "./Chat";
import ChatScreen from "./ChatScreen";



function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
      <Switch>
      
      <Route path="/chat">
          <Chats />
          <ChatScreen />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/petSit">
          <h1>I am Pet Sit page</h1>
        </Route>
        <Route path="/Vet">
          <h1>I am Vet booking page</h1>
        </Route>
        <Route path="/meet">
        <PetCards />
        <SwipeButtons />
        </Route>
        <Route path="/">
          <h1>I am Login page</h1>
        </Route>
      </Switch>
    </Router>
    

      

    </div>
  );
}

{/* Header*/}
/*<Header />*/

{/*tinder cards*/}
   {/*butons at the bottom*/}

   {/*chat screen */}
   {/*seperate chat screen*/}

export default App;
