import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home"
import Navbar from "./components/Navbar"


function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Route exact path="/19-employeetracker" component={Home} />
        <Route exact path="/home" component={Home} />

      </div>
    </Router>
  )
}

export default App;
