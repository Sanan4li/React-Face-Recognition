import React from 'react';
import './App.css';
import { Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from "./Components/Home";
import ImageInput from "./Components/ImageInput";
function App() {
  return (
    <div className="App">
       <Router history={createHistory()}>
          <div className="route">
            <Route exact path="/" component={Home} />
            <Route exact path="/photo" component={ImageInput} />
          </div>
        </Router>
    </div>
  );
}

export default App;
