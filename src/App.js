import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';

import { BrowserRouter } from 'react-router-dom';

import Home from './components/ContentContainer'
import Navbar from './components/Navbar'
import User from './components/User/UserContainer'

function App() {
  return (
   <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route path = "/" exact component={Home}/>
      <Route path = "/users" exact component={User}/>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
