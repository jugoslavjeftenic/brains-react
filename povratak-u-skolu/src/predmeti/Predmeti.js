import React from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Predmeti = () => {
    const predmeti = useLoaderData();
    // console.log(predmeti);
    const navigate = useNavigate();

    const prikaziPredmete = () => {
        return null;
    };

    return (
        <Container>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                marginBottom: 3,
            }}>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                }}>
                    <Button variant="outlined">Prikaži</Button>
                    <FormControl>
                        <InputLabel
                            id='predmeti-select-label'
                            onChange={prikaziPredmete}
                        >Predmeti</InputLabel>
                        <Select
                            labelId='predmeti-select-label'
                            id='predmeti-select'
                            label='Predmeti'
                        >
                            <MenuItem value='0'>Sve predmete</MenuItem>
                            <MenuItem value='1'>ID</MenuItem>
                            <MenuItem value='2'>Razred</MenuItem>
                            <MenuItem value='3'>Fond časova</MenuItem>
                        </Select>
                    </FormControl>
                    <input type='text' placeholder='Traži...' />
                </Box>
                <Button variant="outlined" onClick={() => navigate('novi-predmet')}>
                    Novi predmet
                </Button>
            </Box>
            <Outlet></Outlet>
            {/* <ol>
                {predmeti.map((p) => {
                    return (
                        <li key={p.predmet_id}>{p.naziv} {p.razred} {p.fondCasova}</li>
                    );
                })}
            </ol> */}
        </Container>
    );
};

export default Predmeti;
