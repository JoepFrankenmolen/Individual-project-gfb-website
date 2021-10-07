import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';

import { BrowserRouter } from 'react-router-dom';

import Home from './components/ContentContainer'
import Navbar from './components/Navbar'
import User from './components/User/UserContainer'
import GroupItem from './components/Group/GroupItem'
import GroupContainer from './components/Group/GroupContainer';


function App() {
  return (
   <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route path = "/" exact component={Home}/>
      <Route path = "/users" exact component={User}/>
      <Route path = "/groups" exact component={GroupContainer}/>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
