import { createContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import { useLogin } from './login/login_logic';
import Login from './login/Login';
import AppMain from './AppMain';

// Definisanje UserContext-a
// const { user, role, login, logout } = useContext(UserContext);
export const UserContext = createContext(null);

function App() {
	// Autentifikacija
	const [user, login, logout] = useLogin();
	// Autorizacija
	const role = user !== null ? { [user.user.slice(0, 3)]: true } : {};

	return (
		<UserContext.Provider value={{ user, role, login, logout }}>
			<CssBaseline />
			{user ? <AppMain /> : <Login />}
		</UserContext.Provider>
	);
}

export default App;
