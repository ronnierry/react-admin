import { Switch } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import './App.less';
import Admin from './pages/Admin';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
