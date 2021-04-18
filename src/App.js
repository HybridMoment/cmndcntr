
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import BikeFleet from './components/BikeFleet'
import Employees from './components/Employees'
import Repair from './components/Repair'
import Decomission from './Decomission'

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path= "/BikeFleet">
            <BikeFleet/>
          </Route>
          <Route path= "/Employees">
            <Employees/>
          </Route>
          <Route path= "/Repair">
            <Repair/>
          </Route>
          <Route path="/Decomission">
            <Decomission/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
