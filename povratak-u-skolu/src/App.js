import { createContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

import { useLogin } from './login_logic';
import Login from './Login';
import AppMain from './AppMain';

// Definisanje UserContext-a
export const UserContext = createContext(null);
// const { user, login, logout } = useContext(UserContext);

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