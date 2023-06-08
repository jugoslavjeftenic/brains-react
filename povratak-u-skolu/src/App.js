import { createContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

import { useLogin } from './login/login_logic';
import Login from './login/Login';
import AppMain from './AppMain';

// Definisanje UserContext-a
// const { user, login, logout } = useContext(UserContext);
export const UserContext = createContext(null);

function App() {
	// Autentifikacija
	const [user, login, logout] = useLogin();

	return (
		<UserContext.Provider value={{ user, login, logout }}>
			<CssBaseline />
			{user ? <AppMain /> : <Login />}
		</UserContext.Provider>
	);
}

export default App;
