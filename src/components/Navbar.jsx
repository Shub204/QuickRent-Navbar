import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/user-context";
import { useContext } from "react";
import "./css/Navbar.css";
import logo_icon from '../assets/logo.png'
import search_icon from '../assets/search.png'
import cart_icon from '../assets/cart_icon.png'

function Navbarlog() {
  const { userAuth, LogOut } = useContext(UserContext);
  // const [userAuth, setUserAuth] = useState(false);

  const nav = useNavigate();

  const SingOut = () => {
    LogOut();
    nav("/");
  };

  return (
    <div className='navbar'>
    <div className="nav-logo">
      <img src={logo_icon} alt="" />
    </div>
    <ul className="nav-menu">
      <li><Link style={{ textDecoration: 'none' }} to='./'>Home</Link></li>
      <li><Link style={{ textDecoration: 'none' }} to='./contact'>Contact</Link></li>
      <li>Category</li>
    </ul>
    <div className="nav-login-cart">
      <button>Login</button>
      <img src={cart_icon} alt="" />
      <div className="nav-cart-count">0</div>
    </div>
    <div className="search-box">
    <input type="text" placeholder='Search..'/>
    <img src={search_icon} alt="" />
    </div>
  </div>
  );
}

export default Navbarlog;
