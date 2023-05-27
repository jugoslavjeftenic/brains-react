import { NavLink, Outlet } from 'react-router-dom';

// import './App.css';

function App() {
	return (
		<div className='container'>
			<header className='header_container'>
				<div>Header</div>
			</header>
			<aside className='sidenav_container'>
				<ul className='sidenav_list'>
					<li className='sidenav_list_item'>
						<NavLink className='sidenav_list_item_navlink' to='korisnici'>Korisnici</NavLink>
					</li>
					<li className='sidenav_list_item'>
						<NavLink className='sidenav_list_item_navlink' to='administratori'>Administratori</NavLink>
					</li>
					<li className='sidenav_list_item'>
						<NavLink className='sidenav_list_item_navlink' to='nastavnici'>Nastavnici</NavLink>
					</li>
					<li className='sidenav_list_item'>
						<NavLink className='sidenav_list_item_navlink' to='predmeti'>Predmeti</NavLink>
					</li>
					<li className='sidenav_list_item'>
						<NavLink className='sidenav_list_item_navlink' to='predaju'>Predaju</NavLink>
					</li>
				</ul>
			</aside>
			<Outlet></Outlet>
			<div className='scroller'></div>
		</div>
	);
}

export default App;
