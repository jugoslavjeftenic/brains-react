import { Link } from "react-router-dom";
import "./HTMLAssignment.css";
import Header from "./../Header";
import Footer from "./../Footer";

const HTMLAssignment = () => {
	return (
		<div className="wrapper htmlAssignment">
			<Header />
			<h1>HTML i CSS Zadaci</h1>
			<p>Zadaci iz HTML-a i CSS-a</p>
			<div className="zadaci_fleks">
				<Link to="zad01"><div>Zadatak 01</div></Link>
				<Link to="zad02"><div>Zadatak 02</div></Link>
				<Link to="zad03"><div>Zadatak 03</div></Link>
				<Link to="zad04"><div>Zadatak 04</div></Link>
				<Link to="zad05"><div>Zadatak 05</div></Link>
				<Link to="zad06"><div>Zadatak 06</div></Link>
				<Link to="zad07"><div>Zadatak 07</div></Link>
				<Link to="zad08"><div>Zadatak 08</div></Link>
				<Link to="zad09"><div>Zadatak 09</div></Link>
				<Link to="zad10"><div>Zadatak 10</div></Link>
				<Link to="zad11"><div>Zadatak 11</div></Link>
				<Link to="zad12"><div>Zadatak 12</div></Link>
			</div>
			<Footer />
		</div>
	);
};

export default HTMLAssignment;
