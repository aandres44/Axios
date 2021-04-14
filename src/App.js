import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
