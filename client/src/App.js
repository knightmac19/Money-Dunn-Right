import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from "react-router-dom";
import Login from './pages/Login';
import Wrapper from './components/Wrapper';


function App() {
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
