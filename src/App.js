import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from "./components/Signup";
import Home from './components/Home';
import Navbar from './components/Navbar'
import { AuthProvider } from "./contexts/AuthContext";
import Institucion from "./components/Institucion";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/admin' component={Dashboard} />
            <Route path='/Institucion' component={Institucion} />
          </Switch>
        </AuthProvider>
      </Router>

    </div>
  );
}

export default App;
