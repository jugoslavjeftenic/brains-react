import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, CircularProgress, Container, TextField, Typography } from "@mui/material";
import { UserContext } from "./App";
import logo from './assets/icons/logo.svg';
import Loading from "./Loading";

const Login = () => {
    const { login } = useContext(UserContext);
    // const { user, login, logout } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const userName = useRef('');
    const userPassword = useRef('');
    const navigate = useNavigate();

    // kredencije: adm.zeleni/lozinka

    const loginUser = async () => {
        // fetch korisnika sa bekenda
        // TODO: napraviti prikaz ucitavanja
        // TODO: napraviti kontrolu inputa
        setLoading(true);
        try {
            let response = await fetch(`http://localhost:8080/api/v11/login?username=${userName.current}&password=${userPassword.current}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                const user = await response.json();
                login(user);
                navigate('/');
            }
            else {
                // TODO: uhvatiti greske unutar fetch-a (response.status)
                // TODO: uhvatiti greske van fetch-a (try/catch?)
                // TODO: napraviti GUI prikaz greske
                if (response.status === 401) {
                    console.log('Pogrešne kredencije');
                }
                else {
                    console.log('Greška:');
                    console.log(response.status);
                }
            }
        } catch (error) {
            //
        }
        finally {
            // setLoading(false);
        }
    };

    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignContent: 'center',
                    mt: 10,
                }}
            >
                <img src={logo} className="logo" alt="logo" />
                <Typography variant="h4" textAlign={'center'} mb={6}>eDnevnik</Typography>
                <TextField
                    id='username'
                    label='Username'
                    variant='outlined'
                    sx={{ mb: 3 }}
                    onChange={(e) => userName.current = e.target.value}
                />
                <TextField
                    id='password'
                    label='Password'
                    type='password'
                    variant='outlined'
                    sx={{ mb: 3 }}
                    onChange={(e) => userPassword.current = e.target.value}
                />
                <Button onClick={loginUser}>Login</Button>
                <Loading loading={loading} />
            </Box>
        </Container>
    );
};

export default Login;