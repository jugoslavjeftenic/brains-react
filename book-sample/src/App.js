import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<div>
				<ul>
					<li><NavLink to='books'>Books</NavLink></li>
					<li><NavLink to='authors'>Authosr</NavLink></li>
					<li><NavLink to='genres'>Genres</NavLink></li>
				</ul>
			</div>
			<Outlet></Outlet>
		</div>
	);
}

export default App;
