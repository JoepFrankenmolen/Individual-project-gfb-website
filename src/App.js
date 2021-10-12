import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';

import { BrowserRouter } from 'react-router-dom';

import Home from './components/ContentContainer'
import Navbar from './components/Navbar'
import User from './components/User/UserContainer'
import GroupContainer from './components/Group/GroupContainer';


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path = "/users">
            <User/>
          </Route>
          <Route exact path = "/groups">
            <GroupContainer/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
