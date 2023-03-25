import { Link } from "react-router-dom";
import './App.css';

function App() {
	return (
		<div className="App container">
			<header>
				<h1>Univerzalni primer za React</h1>

				<p>
					Ovaj primer sadrži primere za prekvalifikacioni kurs za React.
					Primeri	su prokomentarisani, i svaki je namerno napravljen da bude onoliko jednostavan koliko je to moguće.
				</p>
			</header>

			<main>
				<ul>
					<li> Zadaci </li>
					<ul>
						<li>
							<Link to="html_assignment"> HTML i CSS Zadaci </Link>
						</li>
					</ul>
				</ul>
			</main>
		</div>
	);
}

export default App;
