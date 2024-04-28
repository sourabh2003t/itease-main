import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Home.css';


export const Home = () => {
  const navigate = useNavigate();
  return (
    <body>
    <div className="background">  
    <div className="mask">
      <div className="container">
      <div className="title">Securing Your Digital World, One Byte At A Time</div>
      <div className="title1">IT EASE, an agile consulting company, specializing in Cybersecurity and Staffing services. Agility is more than just a process, it is a mind-set. Our way of working is full of agility and is reflected in the quality of our products and corporate</div>
      <div className="start">Get Started</div>
      </div>
    </div>
    </div>
    </body>
  );
};