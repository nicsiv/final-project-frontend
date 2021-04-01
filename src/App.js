import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import background from './background1.jpg';


function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken}/>
  }
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          {/* <Route path="/login">
            <Login />
          </Route> */}
          <Route
          exact
          path="/"
          component={() => (
            <div style={{ backgroundImage: `url(${background})` }}>
              <Login />{' '}
            </div>
          )}
        />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
