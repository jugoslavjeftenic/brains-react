import React, { useRef, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Alert, Box, Button, CircularProgress, Container, FormControl, Grid, MenuItem, Select, TextField } from '@mui/material';

import Predmet from './Predmet.old';

const Predmeti = () => {
    const navigate = useNavigate();
    const [selectWhatToFetch, setSelectWhatToFetch] = useState(['0', '', 'number', 'none']);
    const fetchParam = useRef('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(Error());
    const [fetchedData, setFetchedData] = useState([]);

    const handleFetchSelect = (e) => {
        const choice = e.target.value;
        setError(Error());
        switch (choice) {
            case '1':
                setSelectWhatToFetch(['1', 'upišite ID predmeta...', 'number', 'inline-flex']);
                break;
            case '2':
                setSelectWhatToFetch(['2', 'upišite početak naziva...', 'text', 'inline-flex']);
                break;
            default:
                setSelectWhatToFetch(['0', '', 'text', 'none']);
        }
    };

    const handleFetchParam = (e) => {
        fetchParam.current = e.target.value;
    };

    const handleFetch = () => {
        let cancel = false;
        const goFetch = async () => {
            try {
                setLoading(true);
                let fetchResult;
                switch (selectWhatToFetch[0]) {
                    case '1':
                        if (isNaN(parseInt(fetchParam.current))) {
                            throw Error(`Upisani ID nije broj!`);
                        }
                        if (parseInt(fetchParam.current) < 1) {
                            throw Error(`Upisani ID mora da bude veći od nule!`);
                        }
                        fetchResult = await fetch(`http://localhost:8080/api/v1/predmeti/${parseInt(fetchParam.current)}`);
                        break;
                    case '2':
                        if (!fetchParam.current) {
                            console.log('usao u if');
                            throw Error(`Upišite početak naziva predmeta!`);
                        }
                        fetchResult = await fetch(`http://localhost:8080/api/v1/predmeti/by-naziv/${fetchParam.current}`);
                        break;
                    default:
                        fetchResult = await fetch("http://localhost:8080/api/v1/predmeti");
                }
                let f = await fetchResult.json();
                if (!Array.isArray(f)) {
                    let notArrayFetched = f;
                    f = [];
                    f.push(notArrayFetched);
                }
                setError(Error());
                if (!cancel) {
                    setFetchedData(f);
                }
            }
            catch (err) {
                setError(err);
                console.error(Error('Uhvaćena greška: ' + err.message ?? err));
            }
            finally {
                setLoading(false);
            }
        };
        goFetch();
        return () => {
            cancel = true;
        };
    };

    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    marginBottom: 3,
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                    }}>
                    <Button
                        variant='contained'
                        disableElevation
                        sx={{
                            width: 100,
                            height: 50,
                            marginRight: 1,
                            marginBottom: 1,
                        }}
                        onClick={handleFetch}
                    >
                        Dobavi
                    </Button>
                    <FormControl
                        sx={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Select
                            variant='outlined'
                            id='predmeti-fetch-select'
                            value={selectWhatToFetch[0]}
                            sx={{
                                width: 200,
                                height: 50,
                                marginRight: 1,
                                marginBottom: 1,
                            }}
                            onChange={handleFetchSelect}
                        >
                            <MenuItem value='0'>sve predmete</MenuItem>
                            <MenuItem value='1'>po ID-u</MenuItem>
                            <MenuItem value='2'>po početku naziva</MenuItem>
                        </Select>
                        <TextField
                            variant='outlined'
                            id='predmeti-fetch-input'
                            label={selectWhatToFetch[1]}
                            type={selectWhatToFetch[2]}
                            sx={{
                                display: () => selectWhatToFetch[3],
                                flexDirection: 'row',
                                width: 200,
                                height: 50,
                                marginBottom: 1,
                            }}
                            onChange={handleFetchParam}
                            error={error.message ? true : false}
                        />
                    </FormControl>
                </Box>
                <Button variant="outlined" onClick={() => navigate('novi-predmet')}>
                    Novi predmet
                </Button>
            </Box>
            <Outlet></Outlet>
            <Box sx={{
                display: () => loading ? 'block' : 'none',
                textAlign: 'center',
                margin: 10,
            }}>
                <CircularProgress />
            </Box>
            <Box sx={{
                display: () => error.message ? 'block' : 'none',
                textAlign: 'center',
                margin: 1,
                marginBottom: 4,
            }}>
                <Alert variant='filled' severity='warning'>{error.message}</Alert>
            </Box>
            <Grid container spacing={3}>
                {fetchedData.map((fd) => {
                    return (
                        <Predmet key={fd.predmet_id} predmet={fd} />
                    );
                })}
            </Grid>
        </Container>
    );
};

export default Predmeti;
