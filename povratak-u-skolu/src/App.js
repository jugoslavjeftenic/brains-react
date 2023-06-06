import { createContext, useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import { useLogin } from './login_logic';
import Login from './Login';
import './App.css';
import AppMain from './AppMain';

// Definisanje palete za temu
const create_palette = (mode) => {
	let result = {};
	if (mode === 'light') {
		result = {
			mode: 'light'
		};
	}
	else {
		result = {
			mode: 'dark'
		};
	}
	return { palette: result };
};

// Definisanje UserContext-a
export const UserContext = createContext(null);

function App() {
	// Definisanje i hendlovanje teme
	const [themeMode, setThemeMode] = useState('light');
	const theme = useMemo(() => createTheme(create_palette(themeMode)), [themeMode]);

	// autorizacija (i autentifikacija?)
	const [user, login, logout] = useLogin();

	return (
		<ThemeProvider theme={theme}>
			<UserContext.Provider value={{ user, login, logout }}>
				<CssBaseline />
				{user ? <AppMain /> : <Login />}
			</UserContext.Provider>
		</ThemeProvider>
	);
}
// const { user, login, logout } = useContext(UserContext);

export default App;
