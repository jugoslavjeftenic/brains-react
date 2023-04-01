import { Link } from "react-router-dom";
import logo from "./assets/images/brains_logo.png";

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/"><div>POČETNA STRANA</div></Link>
                <Link to="/html_assignment"><div>HTML I CSS ZADACI</div></Link>
                <Link to="/js_assignment"><div>JS ZADACI</div></Link>
            </nav>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
        </header >
    )
}

export default Header;