import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
	return (
		<div className="container">
			<header className='container_header'>
				<div>Header</div>
			</header>
			<aside className='sidenav_container'>
				<ul className='sidenav_list'>
					<li className='sidenav_list_item'>
						<NavLink className='sidenav_list_item_navlink' to='books'>Books</NavLink>
					</li>
					<li className='sidenav_list_item'>
						<NavLink className='sidenav_list_item_navlink' to='authors'>Authosr</NavLink>
					</li>
					<li className='sidenav_list_item'>
						<NavLink className='sidenav_list_item_navlink' to='genres'>Genres</NavLink>
					</li>
				</ul>
			</aside>
			<Outlet></Outlet>
		</div>
	);
}

export default App;
