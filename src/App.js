
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import BikeFleet from './components/BikeFleet'
import Employees from './components/Employees'
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
