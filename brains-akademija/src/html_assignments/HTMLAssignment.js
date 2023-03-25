import { Link } from "react-router-dom";
import './../App.css';

const HTMLAssignment = () => {
	return (
		<div className="App container">
			<header>
				<h1>HTML i CSS Zadaci</h1>
			</header>
			<main>
				<p>Zadaci iz HTML-a i CSS-a</p>
				<ul>
					<li>
						<Link to="zad01">Zadatak 01</Link>
					</li>
					<li>
						<Link to="zad02">Zadatak 02</Link>
					</li>
					<li>
						<Link to="zad03">Zadatak 03</Link>
					</li>
					<li>
						<Link to="zad04">Zadatak 04</Link>
					</li>
					<li>
						<Link to="zad05">Zadatak 05</Link>
					</li>
					<li>
						<Link to="zad06">Zadatak 06</Link>
					</li>
					<li>
						<Link to="zad07">Zadatak 07</Link>
					</li>
					<li>
						<Link to="zad08">Zadatak 08</Link>
					</li>
					<li>
						<Link to="zad09">Zadatak 09</Link>
					</li>
					<li>
						<Link to="zad10">Zadatak 10</Link>
					</li>
					<li>
						<Link to="zad11">Zadatak 11</Link>
					</li>
					<li>
						<Link to="zad12">Zadatak 12</Link>
					</li>
				</ul>
			</main>
		</div>
	);
};

export default HTMLAssignment;
