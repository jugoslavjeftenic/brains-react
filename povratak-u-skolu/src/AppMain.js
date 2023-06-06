import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Box, Button, Divider, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { ChevronLeft, Menu } from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ThemeProvider, createTheme, styled, useTheme } from '@mui/material/styles';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const AppMain = () => {
    const lightTheme = createTheme({
        palette: {
            mode: 'light'
        }
    });
    const theme = useTheme(lightTheme);

    // Stanje aside menija
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    return (
        <ThemeProvider theme={theme}>
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
                    <DrawerHeader>
                        <IconButton>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
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

        </ThemeProvider>
    );
};

export default AppMain;
