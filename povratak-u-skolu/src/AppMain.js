import { createContext, useEffect, useMemo, useState } from 'react';
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, Stack, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';
import { ChevronLeft, Menu } from '@mui/icons-material';
import { useLogin } from './login_logic';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const AppMain = () => {
    // Stanje aside menija
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    return (
        <div>
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

        </div>
    );
};

export default AppMain;
