import {  HashRouter  , Route, Routes } from "react-router-dom";
import './App.less';
// import history from "./config/RouterConfig";
import Admin from './pages/Admin';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/*" element={<Admin/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
