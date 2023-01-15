
import logo from "./logo.jpg";
import './index.css';
function NavBArSection(){
    return(
        <div className="nav">
            <div className="nav-main">
              <img src={logo} alt='This is loading' width="35"/>
              <h5>T.Music</h5>
          </div>
            <div className="nav-links">
              <ul>
                <li><a href="">PRICE</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">CONTACT</a></li>
                <li><a href="">TEAM</a></li>
              </ul>
            </div>
            <div className="nav-right">
                 <p>GET STARTED</p>
            </div>
        </div>
    )
}



export default NavBArSection;