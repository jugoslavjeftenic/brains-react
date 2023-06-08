import { useRef, useState } from "react";
import { Box, Button, Container, MenuItem, Select, TextField } from "@mui/material";

import Predmet from "./Predmet";

const Predmeti = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(Error());

    // Priprema za dobavljanje podataka sa bekenda
    const [selectWhatToFetch, setSelectWhatToFetch] = useState(['0', '', 'number', 'none']);
    const handleFetchSelect = (e) => {
        const choice = e.target.value;
        setError(Error());
        switch (choice) {
            case '1':
                setSelectWhatToFetch(['1', 'upišite ID predmeta...', 'number', 'inline-flex']);
                break;
            case '2':
                setSelectWhatToFetch(['2', 'upišite početak naziva predmeta...', 'text', 'inline-flex']);
                break;
            default:
                setSelectWhatToFetch(['0', '', 'text', 'none']);
        }
    };
    const fetchParam = useRef('');
    // const handleFetchParam = (e) => {
    //     fetchParam.current = e.target.value;
    // };

    // Dobavljanje podataka sa bekenda
    const [fetchedData, setFetchedData] = useState([]);
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
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                mt: 3,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    columnGap: 1,
                    rowGap: 2,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        columnGap: 1,
                        rowGap: 2,
                        flexGrow: 1,
                    }}
                >
                    <Button
                        variant='contained'
                        size='large'
                        disableElevation
                        onClick={handleFetch}
                    >
                        Dobavi
                    </Button>
                    <Select
                        variant='outlined'
                        size='large'
                        id='predmeti-fetch-select'
                        value={selectWhatToFetch[0]}
                        sx={{
                            width: 190,
                        }}
                        onChange={handleFetchSelect}
                    >
                        <MenuItem value='0'>sve predmete</MenuItem>
                        <MenuItem value='1'>po ID-u</MenuItem>
                        <MenuItem value='2'>po početku naziva</MenuItem>
                    </Select>
                    <TextField
                        variant='outlined'
                        size='large'
                        id='predmeti-fetch-input'
                        label={selectWhatToFetch[1]}
                        type={selectWhatToFetch[2]}
                        sx={{
                            display: () => selectWhatToFetch[3],
                            flexGrow: 1,
                            maxWidth: 300,
                        }}
                        onChange={(e) => fetchParam.current = e.target.value}
                        // onChange={handleFetchParam}
                        error={error.message ? true : false}
                    />
                </Box>
                <Button
                    variant='outlined'
                    size='large'
                >Novi predmet</Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 1,
                    mt: 2,
                    mb: 2,
                }}
            >
                {fetchedData.map((fd) => {
                    return (
                        <Predmet key={fd.predmet_id} predmet={fd} />
                    );
                })}
            </Box>
        </Container>
    );
};

export default Predmeti;
