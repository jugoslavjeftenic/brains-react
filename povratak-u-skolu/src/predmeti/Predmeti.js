import React, { useRef, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Button, Container, FormControl, MenuItem, Select, TextField } from '@mui/material';

const Predmeti = () => {
    const navigate = useNavigate();
    const [selectWhatToFetch, setSelectWhatToFetch] = useState(['0', '', 'none']);
    const fetchParam = useRef('');
    const [fetchedData, setFetchedData] = useState([]);

    const handleFetchSelect = (e) => {
        const choice = e.target.value;
        switch (choice) {
            case '1':
                setSelectWhatToFetch(['1', 'upišite ID predmeta...', 'inline-flex']);
                break;
            case '2':
                setSelectWhatToFetch(['2', 'upišite početak naziva...', 'inline-flex']);
                break;
            default:
                setSelectWhatToFetch(['0', '', 'none']);
        }
    };

    const handleFetchParam = (e) => {
        fetchParam.current = e.target.value;
    };

    const handleFetch = () => {
        let cancel = false;
        const goFetch = async () => {
            try {
                let fetchResult;
                switch (selectWhatToFetch[0]) {
                    case '1':
                        fetchResult = await fetch(`http://localhost:8080/api/v1/predmeti/${parseInt(fetchParam.current)}`);
                        break;
                    case '2':
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
                if (!cancel) {
                    setFetchedData(f);
                }
            }
            catch (error) {
                console.error("Doslo je do greske: " + error.message);
            }
            finally {
                //
            }
        };
        goFetch();
        return () => {
            cancel = true;
        };
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
                            sx={{
                                display: () => selectWhatToFetch[2],
                                flexDirection: 'row',
                                width: 200,
                                height: 50,
                                marginBottom: 1,
                            }}
                            onChange={handleFetchParam}
                        />
                    </FormControl>
                </Box>
                <Button variant="outlined" onClick={() => navigate('novi-predmet')}>
                    Novi predmet
                </Button>
            </Box>
            <Outlet></Outlet>
            <ol>
                {fetchedData.map((p) => {
                    return (
                        <li key={p.predmet_id}>{p.naziv} {p.razred} {p.fondCasova}</li>
                    );
                })}
            </ol>
        </Container>
    );
};

export default Predmeti;
