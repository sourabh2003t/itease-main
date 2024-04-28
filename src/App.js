import logo from './logo.svg';
import './App.css';
import {NavBar} from './Components/Navbar/NavBar'
import {Home} from './Components/Home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
