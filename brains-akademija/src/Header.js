import { Link } from "react-router-dom";
import logo from "./assets/images/brains_logo.png";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">POČETNA STRANA</Link></li>
                    <li><Link to="/html_assignment">HTML I CSS ZADACI</Link></li>
                    <li><Link to="/">LINK 3</Link></li>
                </ul>
            </nav>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
        </header >
    )
}

export default Header;