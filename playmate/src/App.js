import React from "react";
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <h1>ezyVet Hackerthon 2022 PlayMate😻🐶</h1>
      <Header />
      <Router>
      <Switch>
      <Route path="/chat">
          <h1>I am chatpage</h1>
        </Route>
        <Route path="/petSit">
          <h1>I am Pet Sit page</h1>
        </Route>
        <Route path="/Vet">
          <h1>I am Vet booking page</h1>
        </Route>
        <Route path="/">
          <h1>I am homepage</h1>
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
