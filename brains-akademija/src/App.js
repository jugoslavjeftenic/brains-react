import { Link } from "react-router-dom";
// import './App.css';

function App() {
	return (
		<div className="App">
			<h1>Univerzalni primer za React</h1>
			<p>
				Ovaj primer sadrži primere za prekvalifikacioni kurs za React.
				Primeri	su prokomentarisani, i svaki je namerno napravljen da bude onoliko jednostavan koliko je to moguće.
			</p>
			<ul>
				<li> Zadaci </li>
				<ul>
					<li>
						<Link to="html_assignment"> HTML i CSS Zadaci </Link>
					</li>
				</ul>
			</ul>
		</div>
	);
}

export default App;
