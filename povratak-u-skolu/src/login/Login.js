import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

import logo from '../assets/icons/logo.svg';
import { UserContext } from '../App';

import LoadingComponent from '../components/LoadingComponent';
import WarningComponent from '../components/WarningComponent';
import ErrorComponent from '../components/ErrorComponent';

const Login = () => {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [warning, setWarning] = useState(null);
    const [error, setError] = useState(null);

    const userName = useRef('');
    const userPassword = useRef('');

    const handleLogin = async () => {
        // reset upozorenja
        setLoading(true);
        setWarning(null);
        setError(null);
        try {
            // validacija unosa
            if (userName.current === '' || userPassword.current === '') {
                return setWarning('Molim Vas da upišete korisničko ime i lozinku!');
            }
            // fetch korisnika sa bekenda
            let response = await fetch(`http://localhost:8080/api/v1/login?username=${userName.current}&password=${userPassword.current}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                const user = await response.json();
                login(user);
                navigate('/');
            }
            else {
                // hvatanje neuspesnog HTTP odgovora
                if (response.status === 401) {
                    setWarning(`Pogrešno korisničko ime ili lozinka (HTTP kod: ${response.status})`);
                }
                else {
                    setWarning(`Zahtev ka serveru nije bio uspešan (HTTP kod: ${response.status})`);
                }
            }
        } catch (error) {
            // hvatanje greski van HTTP odgovora
            setError(new Error(error));
        }
        finally {
            // reset upozorenja
            setLoading(false);
        }
    };

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignContent: 'center',
                mt: 5,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignContent: 'center',
                    mb: 5,
                }}
            >
                <img src={logo} className='logo' alt='logo' />
                <Typography variant='h4' textAlign={'center'} mb={6}>Dobrodošli u eDnevnik</Typography>
                <TextField
                    id='username'
                    label='korisničko ime'
                    variant='outlined'
                    sx={{ mb: 3 }}
                    onChange={(e) => userName.current = e.target.value}
                />
                <TextField
                    id='password'
                    label='lozinka'
                    type='password'
                    variant='outlined'
                    sx={{ mb: 3 }}
                    onChange={(e) => userPassword.current = e.target.value}
                />
                <Button onClick={handleLogin}>Login</Button>
            </Box>
            <Box
                sx={{
                    alignSelf: 'center',
                }}
            >
                {loading && <LoadingComponent loading={loading} />}
                {warning && <WarningComponent warning={warning} />}
                {error && <ErrorComponent error={error.message} />}
            </Box>
        </Container>
    );
};

export default Login;