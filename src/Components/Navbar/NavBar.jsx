import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Navbar.css';

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    
<div className="Nav">
  <div className="logo">ITEASE</div>
  <div className="buttons">
    <button id="sign_in">Sign in</button>
    <button id="log_in">Log in</button>
  </div>
</div>
  );
};