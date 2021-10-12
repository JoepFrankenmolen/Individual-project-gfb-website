import './../../css/App.css';
import Navbar from './Navbar'
import ContentContainer from './ContentContainer';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <ContentContainer/>
      </Router>
    </div>
  );
}

export default App;
