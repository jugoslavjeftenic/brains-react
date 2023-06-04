import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField } from "@mui/material";
import { UserContext } from "./App";

const Login = () => {
    const { login } = useContext(UserContext);
    // const { user, login, logout } = useContext(UserContext);
    const userName = useRef('');
    const userPassword = useRef('');
    const navigate = useNavigate();

    // kredencije: adm.zeleni/lozinka

    const loginUser = async () => {
        // fetch korisnika sa bekenda
        // TODO: napraviti prikaz ucitavanja
        // TODO: napraviti kontrolu inputa
        console.log('poslao:');
        console.log(userName);
        console.log(userPassword);
        let response = await fetch(`http://localhost:8080/api/v1/login?username=${userName.current}&password=${userPassword.current}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            const user = await response.json();
            login(user);
            navigate('/');
            console.log('primio:');
            console.log(user);
        }
        else {
            // TODO: uhvatiti greske unutar fetch-a (response.status)
            // TODO: uhvatiti greske van fetch-a (try/catch?)
            // TODO: napraviti GUI prikaz greske
            console.log('primio gresku:');
            console.log(response);
            if (response.status === 401) {
                console.log('Pogrešne kredencije');
            }
            else {
                console.log('Greška:');
                console.log(response.status);
            }
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
            </Box>
        </Container>
    );
};

export default Login;