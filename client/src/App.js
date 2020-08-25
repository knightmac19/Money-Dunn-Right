import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Wrapper from './components/Wrapper';


function App() {
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/" component={Signup} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
