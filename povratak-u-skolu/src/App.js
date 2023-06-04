import { createContext, useEffect, useMemo, useState } from 'react';
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, Stack, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';
import { ChevronLeft, Menu } from '@mui/icons-material';
import { useLogin } from './login_logic';
import { Outlet, useNavigate } from 'react-router-dom';
// import './App.css';

// Definisanje UserContext-a potrebnog za autorizaciju i autentifikaciju
export const UserContext = createContext(null);

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

function App() {
	// autorizacija (i autentifikacija?)
	const [user, login, logout] = useLogin();
	const navigate = useNavigate();

	// TODO prebaciti u loader?
	useEffect(() => {
		if (!user) {
			navigate('login');
		}
	}, []);

	// Stanje aside menija
	const [isOpenDrawer, setIsOpenDrawer] = useState(false);

	// Definisanje i hendlovanje teme
	const [themeMode, setThemeMode] = useState('light');
	const theme = useMemo(() => createTheme(create_palette(themeMode)), [themeMode]);

	// Placeholder funkcija
	// const placeHolderFunction = () => { };

	return (
		<ThemeProvider theme={theme}>
			<UserContext.Provider value={{ user, login, logout }}>
				<CssBaseline />
				<Stack direction='column'>
					<AppBar
						sx={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							height: '4rem',
						}}
					>
						<Toolbar>
							<IconButton onClick={(e) => setIsOpenDrawer(true)}>
								<Menu />
							</IconButton>
						</Toolbar>
						<Typography
							variant='h6'
							sx={{
								flexGrow: 1,
								pl: '2rem',
								// textAlign: 'center',
							}}
						>eDnevnik</Typography>
						<Typography
							sx={{
								pr: '2rem',
							}}
						>Zdravo</Typography>
					</AppBar>
					<Drawer
						anchor='left'
						open={isOpenDrawer}
						onClose={(e) => setIsOpenDrawer(false)}
					>
						<Box>
							<IconButton onClick={(e) => setIsOpenDrawer(false)}>
								<ChevronLeft />
							</IconButton>
						</Box>
						<Divider />
						<Stack direction='column'>
							<Button>Dugme 1</Button>
							<Button>Dugme 2</Button>
						</Stack>
					</Drawer>
				</Stack>
				<Box sx={{ pt: '4rem' }}>
					<Outlet />
				</Box>
			</UserContext.Provider>
		</ThemeProvider>
	);
}

export default App;
