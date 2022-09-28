import React from 'react';
import './App.css';
import SwipeButtons from './SwipeButtons';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am the chat page</h1> 
          </Route>
          <Route path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
