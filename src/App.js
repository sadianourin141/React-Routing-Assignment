import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Component/Home/Home';
import PostDetails from './Component/PostDetails/PostDetails';
import NoMatch from './Component/NoMatch/NoMatch';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/Home'>
            <Home></Home>

          </Route>
          <Route path='/About/:postId'>
            <PostDetails></PostDetails>

          </Route>
          <Route exact path='/'>
            <Home/>

          </Route>
          <Route path='*'>
            <NoMatch/>

          </Route>

        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
