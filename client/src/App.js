import React from 'react';
import Dashboard from './components/Dashboard';
// import CreatePost from './components/CreatePost'
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Router>
        {/* <Route path="/create" component={CreatePost} /> */}
      </Router>
    </div>
  );
}

export default App;
