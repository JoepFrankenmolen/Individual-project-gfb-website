import Navbar from './Navbar'
import SideNavbar from './SideNavbar';
import ContentContainer from './ContentContainer';
import { BrowserRouter as Router} from 'react-router-dom';
import "./../../css/App.css"


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <div className="parrent">
          <div className="child">
            <SideNavbar/>
          </div>
          <div className="child" className="test">
            <ContentContainer/>
          </div>         
        </div>
      </Router>
    </div>
  );
}

export default App;
