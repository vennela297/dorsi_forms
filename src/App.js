
import './App.css';
import Agency from "./Agency/Agency"
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Submitted from "./Submitted";
import Multi  from "./Client/MultiStepForm"
function App() {
  return (
    <div className="App">
     <Router>
     <Switch>

     

      <Route path="/sub">
      <Submitted />
      </Route>
      <Route path="/client">
      <Multi />
      </Route>
      
      <Route path="/">
      <Agency />
      </Route>


      </Switch>

      
    </Router>
    </div>
  );
}

export default App;
