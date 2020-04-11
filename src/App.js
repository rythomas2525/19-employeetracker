import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home"
import Navbar from "./components/Navbar"
import jobtitle from "./pages/jobtitle"
import yearhired from "./pages/yearhired"


function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Route exact path="/19-employeetracker" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/jobtitle" component={jobtitle} />
        <Route exact path="/yearhired" component={yearhired} />
      </div>
    </Router>
  )
}

export default App;
