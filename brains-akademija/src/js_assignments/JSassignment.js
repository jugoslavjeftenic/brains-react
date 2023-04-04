import { Link } from "react-router-dom";
import './JSassignment.css';
import Header from "./../Header";
import Footer from "./../Footer";

const JSassignment = () => {
    return (
        <div className="wrapper assignment">
            <Header />
            <h1>JS zadaci</h1>
            <div className="zadaci_fleks">
                <Link to="JSz01"><div>Zadatak 01</div></Link>
                <Link to="JSz02"><div>Zadatak 02</div></Link>
                <Link to="JSz03"><div>Zadatak 03</div></Link>
                <Link to="JSz04"><div>Zadatak 04</div></Link>
                <Link to="JSz05"><div>Zadatak 05</div></Link>
                <Link to="JSz06"><div>Zadatak 06</div></Link>
                <Link to="JSz07"><div>Zadatak 07</div></Link>
                <Link to="JSz08"><div>Zadatak 08</div></Link>
                <Link to="JSz09"><div>Zadatak 09</div></Link>
                <Link to="JSz10"><div>Zadatak 10</div></Link>
            </div>
            <h2>JS zadaci - dopunske vežbe</h2>
            <div className="zadaci_fleks">
                <Link to="JSdz01"><div>Zadatak 01</div></Link>
                <Link to="JSdz02"><div>Zadatak 02</div></Link>
                <Link to="JSdz03"><div>Zadatak 03</div></Link>
                <Link to="JSdz04"><div>Zadatak 04</div></Link>
                <Link to="JSdz05"><div>Zadatak 05</div></Link>
                <Link to="JSdz06"><div>Zadatak 06</div></Link>
                <Link to="JSdz07"><div>Zadatak 07</div></Link>
                <Link to="JSdz08"><div>Zadatak 08</div></Link>
                <Link to="JSdz09"><div>Zadatak 09</div></Link>
                <Link to="JSdz10"><div>Zadatak 10</div></Link>
            </div>
            <Footer />
        </div >
    );
}

export default JSassignment;
