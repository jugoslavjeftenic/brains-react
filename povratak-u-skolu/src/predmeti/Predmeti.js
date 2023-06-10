import { useContext, useEffect, useRef, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Button, Container, MenuItem, Select, TextField } from '@mui/material';

import { UserContext } from '../App';
import LoadingComponent from '../components/LoadingComponent';
import WarningComponent from '../components/WarningComponent';
import ErrorComponent from '../components/ErrorComponent';
import Predmet from './Predmet';

const Predmeti = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [warning, setWarning] = useState(null);
    const [error, setError] = useState(null);

    // Priprema za dobavljanje podataka sa bekenda
    const [selectWhatToFetch, setSelectWhatToFetch] = useState(['0', '', 'number', 'none']);
    const handleFetchSelect = (e) => {
        const choice = e.target.value;
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

    // Dobavljanje podataka sa bekenda
    const [fetchedData, setFetchedData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const handleFetch = () => {
        // reset upozorenja
        setLoading(true);
        setWarning(null);
        setError(null);

        let cancel = false;
        const goFetch = async () => {
            try {
                let response;
                switch (selectWhatToFetch[0]) {
                    case '1':
                        // Predmet se dobavlja po ID-u
                        if (isNaN(parseInt(fetchParam.current))) {
                            return setWarning('Molim Vas da upišete ID predmeta!');
                        }
                        if (parseInt(fetchParam.current) < 1) {
                            return setWarning(`Upisani ID mora da bude veći od nule!`);
                        }
                        response = await fetch(`http://localhost:8080/api/v1/predmeti/${parseInt(fetchParam.current)}`, {
                            headers: {
                                'Authorization': `Bearer ${user.token}`
                            }
                        });
                        break;
                    case '2':
                        // Predmeti se dobavljaju po pocetku naziva
                        if (!fetchParam.current) {
                            return setWarning(`Upišite početak naziva predmeta!`);
                        }
                        response = await fetch(`http://localhost:8080/api/v1/predmeti/by-naziv/${fetchParam.current}`, {
                            headers: {
                                'Authorization': `Bearer ${user.token}`
                            }
                        });
                        break;
                    default:
                        // Dobavljaju se svi predmeti
                        response = await fetch(`http://localhost:8080/api/v1/predmeti`, {
                            headers: {
                                'Authorization': `Bearer ${user.token}`
                            }
                        });
                }
                if (response.ok) {
                    let f = await response.json();
                    // U slucaju da bekend nije poslao niz, prepakuje se u niz
                    if (!Array.isArray(f)) {
                        let notArrayFetched = f;
                        f = [];
                        f.push(notArrayFetched);
                    }
                    if (!cancel) {
                        setFetchedData(f);
                        setFilteredData(fetchedData);
                    }
                }
                else {
                    // hvatanje neuspesnog HTTP odgovora
                    if (response.status === 403) {
                        setWarning(`Niste ovlašćeni da pristupite traženim resursima. (HTTP kod: ${response.status})`);
                    }
                    else if (response.status === 404) {
                        setWarning(`Nije pronađen predmet sa ID-om: ${fetchParam.current} (HTTP kod: ${response.status})`);
                    }
                    else {
                        setWarning(`Zahtev ka serveru nije bio uspešan (HTTP kod: ${response.status})`);
                    }
                }
            }
            catch (error) {
                // hvatanje greski van HTTP odgovora
                setError(new Error(error));
            }
            finally {
                // reset upozorenja
                setLoading(false);
            }
        };
        goFetch();
        return () => {
            cancel = true;
        };
    };

    // Filtriranje dobavljenih podataka
    const [showFilterField, setShowFilterField] = useState(false);
    const [filter, setFilter] = useState('');
    useEffect(() => {
        if (fetchedData.length > 0) {
            setShowFilterField(true);
        }
        else {
            setShowFilterField(false);
        }
        if (filter !== '') {
            setFilteredData(fetchedData.filter(u => {
                return u.naziv.toLowerCase().includes(filter.toLowerCase());
            }));
        } else {
            setFilteredData(fetchedData);
        }
    }, [filter, fetchedData]);

    // Promena znacaja dugmica 'Dobavi' i 'Novi Predmet'
    const [toggleBtnNoviPredmet, setToggleBtnNoviPredmet] = useState(false);
    useEffect(() => {
        if (toggleBtnNoviPredmet) {
            navigate('novi-predmet');
        }
        else {
            navigate('/predmeti');
        }
    }, [toggleBtnNoviPredmet, navigate]);

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
                        variant={toggleBtnNoviPredmet ? 'outlined' : 'contained'}
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
                        sx={{ width: 190 }}
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
                    />
                </Box>
                {showFilterField && <TextField
                    variant='outlined'
                    size='large'
                    id='predmeti-search-input'
                    label={'Filtriraj po nazivu...'}
                    type={'text'}
                    sx={{ maxWidth: 300 }}
                    onChange={(e) => setFilter(e.target.value)}
                />}
                <Button
                    variant={toggleBtnNoviPredmet ? 'contained' : 'outlined'}
                    size='large'
                    disableElevation
                    onClick={() => setToggleBtnNoviPredmet(!toggleBtnNoviPredmet)}
                >Novi predmet</Button>
            </Box>
            {toggleBtnNoviPredmet && <Box
                width={'100%'}
                mt={5}
                mb={5}
                borderRadius={2}
                p={1}
                sx={{ alignSelf: 'center', boxShadow: 3 }}
            >
                <Outlet />
            </Box>}
            <Box
                sx={{ alignSelf: 'center' }}
            >
                {loading && <Box sx={{ mt: 5, mb: 5 }}><LoadingComponent loading={loading} sx={{ mt: 10, mb: 10 }} /></Box>}
                {warning && <Box sx={{ mt: 5, mb: 5 }}><WarningComponent warning={warning} /></Box>}
                {error && <Box sx={{ mt: 5, mb: 5 }}><ErrorComponent error={error.message} sx={{ mt: 10, mb: 10 }} /></Box>}
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
                {filteredData.map((fd) => {
                    return (
                        <Predmet key={fd.predmet_id} predmet={fd} />
                    );
                })}
            </Box>
        </Container>
    );
};

export default Predmeti;
