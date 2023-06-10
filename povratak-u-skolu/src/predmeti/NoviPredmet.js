import { useContext, useRef, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { UserContext } from "../App";
import LoadingComponent from '../components/LoadingComponent';
import WarningComponent from '../components/WarningComponent';
import ErrorComponent from '../components/ErrorComponent';

const NoviPredmet = () => {
    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [warning, setWarning] = useState(null);
    const [error, setError] = useState(null);

    const [fetchedData, setFetchedData] = useState([]);

    // Generisanje dummy predmeta
    const handleFetchDummyData = () => {
        // reset upozorenja
        setLoading(true);
        setWarning(null);
        setError(null);

        let cancel = false;
        const goFetch = async () => {
            try {
                let response;
                response = await fetch(`http://localhost:8080/api/v1/predmeti/dummy`, {
                    method: "POST",
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
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
                    }
                }
                else {
                    // hvatanje neuspesnog HTTP odgovora
                    if (response.status === 403) {
                        setWarning(`Niste ovlašćeni da pristupite traženim resursima. (HTTP kod: ${response.status})`);
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
        goFetch();
        return () => {
            cancel = true;
        };
    };

    // Dodavanje novog predmeta
    const noviPredmetNaziv = useRef(null);
    const noviPredmetRazred = useRef(null);
    const noviPredmetFond = useRef(null);
    const handleFetchNoviPredmet = () => {
        // reset upozorenja
        setLoading(true);
        setWarning(null);
        setError(null);

        let cancel = false;
        const goFetch = async () => {
            try {
                // Validacija i priprema vrednosti naziva
                if (noviPredmetNaziv.current == null || noviPredmetNaziv.current === '') {
                    return setWarning('Molim Vas da upišete naziv predmeta!');
                }
                const regex = new RegExp(/^\s*([a-zA-ZšđčćžŠĐČĆŽ]{3})(.*)$/);
                if (!regex.test(noviPredmetNaziv.current)) {
                    return setWarning('Naziv predmeta mora da počinje sa najmanje tri slovna karaktera!');
                }
                const strNoviPredmetNaziv = noviPredmetNaziv.current.trim().charAt(0).toUpperCase() + noviPredmetNaziv.current.trim().slice(1).toLowerCase();
                // Validacija vrednosti razreda
                if (isNaN(parseInt(noviPredmetRazred.current))) {
                    return setWarning('Molim Vas da upišete razred!');
                }
                if (parseInt(noviPredmetRazred.current) < 1 || parseInt(noviPredmetRazred.current) > 8) {
                    return setWarning(`Razred mora da bude 1 - 8!`);
                }
                // Validacija vrednosti fonda casova
                if (isNaN(parseInt(noviPredmetFond.current))) {
                    return setWarning('Molim Vas da upišete nedeljni fond časova!');
                }
                if (parseInt(noviPredmetFond.current) < 1 || parseInt(noviPredmetFond.current) > 5) {
                    return setWarning(`Nedeljni fond časova mora da bude 1 - 5!`);
                }
                let response;
                response = await fetch(`http://localhost:8080/api/v1/predmeti`, {
                    method: "POST",
                    headers: {
                        'Authorization': `Bearer ${user.token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        naziv: strNoviPredmetNaziv,
                        razred: noviPredmetRazred.current,
                        fondCasova: noviPredmetFond.current,
                    }),
                });
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
                    }
                }
                else {
                    // hvatanje neuspesnog HTTP odgovora
                    if (response.status === 403) {
                        setWarning(`Niste ovlašćeni da pristupite traženim resursima. (HTTP kod: ${response.status})`);
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
        goFetch();
        return () => {
            cancel = true;
        };
    };

    return (
        <Box
            alignSelf={'center'}
            border={1}
            borderRadius={2}
            padding={2}
        >
            <Box
                textAlign={'center'}
            >
                <Typography
                    variant='subtitle1'
                    textAlign={'center'}
                >NOVI PREDMET</Typography>
            </Box>
            <Box
                textAlign={'center'}
            >
                <TextField
                    required
                    variant='standard'
                    id='predmet-naziv'
                    type='text'
                    label='Naziv predmeta'
                    onChange={(e) => noviPredmetNaziv.current = e.target.value}
                />
                <TextField
                    required
                    variant='standard'
                    id='predmet-razred'
                    type='number'
                    label='Razred'
                    onChange={(e) => noviPredmetRazred.current = e.target.value}
                />
                <TextField
                    required
                    variant='standard'
                    id='predmet-fond-casova'
                    type='number'
                    label='Fond časova'
                    onChange={(e) => noviPredmetFond.current = e.target.value}
                />
            </Box>
            <Box
                textAlign={'center'}
                mt={2}            >
                <Button
                    variant='outlined'
                    size='small'
                    sx={{ mr: 2, mb: 1 }}
                    onClick={handleFetchDummyData}
                >Generiši podrazumevane predmete</Button>
                <Button
                    variant='contained'
                    size='large'
                    disableElevation
                    sx={{ mr: 2, mb: 1 }}
                    onClick={handleFetchNoviPredmet}
                >Upiši</Button>
            </Box>
            <Box
                textAlign={'center'}
                maxWidth={500}
                ml={'auto'}
                mr={'auto'}
            >
                {loading && <Box sx={{ mt: 5, mb: 5 }}><LoadingComponent loading={loading} sx={{ mt: 10, mb: 10 }} /></Box>}
                {warning && <Box sx={{ mt: 5, mb: 5 }}><WarningComponent warning={warning} /></Box>}
                {error && <Box sx={{ mt: 5, mb: 5 }}><ErrorComponent error={error.message} sx={{ mt: 10, mb: 10 }} /></Box>}
            </Box>
            <Stack direction='column' sx={{ padding: '0.2rem' }}>
                {fetchedData.map((fd) => {
                    return (
                        <Typography variant='body2' key={fd.predmet_id}>
                            [ID: {fd.predmet_id}] - {fd.naziv} za razred [{fd.razred}] sa fondom časova [{fd.fondCasova}].
                        </Typography>
                    );
                })}
            </Stack>
        </Box>
    );
};

export default NoviPredmet;