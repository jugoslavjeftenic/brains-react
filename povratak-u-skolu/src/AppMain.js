import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Drawer, FormControlLabel, FormGroup, IconButton, Stack, Switch, Toolbar, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import MenuOpenTwoToneIcon from '@mui/icons-material/MenuOpenTwoTone';

const AppMain = () => {
    // Teme
    const [isDarkMode, setIsDarkMode] = useState(false);
    const lightTheme = createTheme({
        palette: {
            mode: 'light'
        }
    });
    const darkTheme = createTheme({
        palette: {
            mode: 'dark'
        }
    });

    // Stanje Drawer-a
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    // Navigacija
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
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
                            <MenuTwoToneIcon fontSize='large' />
                        </IconButton>
                    </Toolbar>
                    <Typography
                        variant='h5'
                        sx={{
                            flexGrow: 1,
                            // pl: '1rem',
                            // textAlign: 'center',
                        }}
                    >eDnevnik</Typography>
                    <FormGroup>
                        <FormControlLabel
                            control={< Switch checked={isDarkMode} onChange={(e) => setIsDarkMode(!isDarkMode)} />}
                            label='Dark mode'
                        />
                    </FormGroup>
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
                    <Box textAlign={'right'}>
                        <IconButton sx={{ padding: '1rem' }} onClick={(e) => setIsOpenDrawer(false)}>
                            <MenuOpenTwoToneIcon fontSize='large' />
                        </IconButton>
                    </Box>
                    <Stack direction='column' sx={{ padding: '0.2rem' }}>
                        <Button
                            variant='contained'
                            sx={{
                                margin: '0.2rem',
                                mb: '0.4rem',
                            }}
                            onClick={() => {
                                setIsOpenDrawer(false);
                                navigate('predmeti');
                            }}
                        >Korisnici</Button>
                        <Button
                            variant='contained'
                            sx={{
                                margin: '0.2rem',
                                mb: '0.4rem',
                            }}
                            onClick={() => {
                                setIsOpenDrawer(false);
                                navigate('predmeti');
                            }}
                        >Predmeti</Button>
                    </Stack>
                </Drawer>
            </Stack>
            <Box sx={{ pt: '4rem' }}>
                <Outlet />
            </Box>

        </ThemeProvider>
    );
};

export default AppMain;
