import { useContext, useEffect, useRef, useState } from "react";
import { Autocomplete, Box, Button, Stack, TextField, Typography } from "@mui/material";

import { UserContext } from "../App";
import LoadingComponent from '../components/LoadingComponent';
import WarningComponent from '../components/WarningComponent';
import ErrorComponent from '../components/ErrorComponent';

const PredavanjeNew = () => {
    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [warning, setWarning] = useState(null);
    const [error, setError] = useState(null);

    // Dobavljanje nastavnika i predmeta sa bekenda
    const [fetchedNastavnici, setFetchedNastavnici] = useState([]);
    const [fetchedPredmeti, setFetchedPredmeti] = useState([]);
    const handleFetchPreparation = () => {
        // reset upozorenja
        setLoading(true);
        setWarning(null);
        setError(null);

        let cancel = false;
        const goFetch = async () => {
            try {
                // Dobavljaju se nastavnici
                let responseN, responseP;
                responseN = await fetch(`http://localhost:8080/api/v1/nastavnici`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                // Dobavljaju se predmeti
                responseP = await fetch(`http://localhost:8080/api/v1/predmeti`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                if (responseN.ok && responseP.ok) {
                    let fN = await responseN.json();
                    let fP = await responseP.json();
                    // U slucaju da bekend nije poslao niz, prepakuje se u niz
                    if (!Array.isArray(fN)) {
                        let notArrayFetched = fN;
                        fN = [];
                        fN.push(notArrayFetched);
                    }
                    if (!Array.isArray(fP)) {
                        let notArrayFetched = fP;
                        fP = [];
                        fP.push(notArrayFetched);
                    }
                    if (!cancel) {
                        setFetchedNastavnici(fN);
                        setFetchedPredmeti(fP);
                    }
                }
                else {
                    // hvatanje neuspesnog HTTP odgovora
                    if (responseN.status === 403 || responseP.status === 403) {
                        setWarning(`Niste ovlašćeni da pristupite traženim resursima. (HTTP kod: ${responseN.status})`);
                    }
                    else {
                        setWarning(`Zahtev ka serveru nije bio uspešan (HTTP kod: ${responseN.status})`);
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
    useEffect(() => {
        handleFetchPreparation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Dodavanje novog predavanja
    const nastavnik = useRef(0);
    const predmet = useRef(0);
    const [fetchedData, setFetchedData] = useState([]);
    const handleFetchNovoPredavanje = () => {
        // reset upozorenja
        setLoading(true);
        setWarning(null);
        setError(null);

        let cancel = false;
        const goFetch = async () => {
            try {
                // Validacija izbora
                if (isNaN(parseInt(nastavnik.current)) || nastavnik.current < 1) {
                    return setWarning('Molim Vas da izaberete nastavnika!');
                }
                if (isNaN(parseInt(predmet.current)) || predmet.current < 1) {
                    return setWarning('Molim Vas da izaberete predmet!');
                }
                let response;
                response = await fetch(`http://localhost:8080/api/v1/predaju?idNastavnik=${parseInt(nastavnik.current)}&idPredmet=${parseInt(predmet.current)}`, {
                    method: "POST",
                    headers: {
                        'Authorization': `Bearer ${user.token}`,
                        'Content-Type': 'application/json'
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
                    if (response.status === 417) {
                        setWarning(`Nastavnik je već registrovan za predmet. (HTTP kod: ${response.status})`);
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
                >NOVO PREDAVANJE</Typography>
            </Box>
            <Stack
                direction='row'
                justifyContent='center'
                spacing={1}
            >
                <Autocomplete
                    getOptionLabel={(fetchedNastavnici) => `${fetchedNastavnici.korisnik.ime} ${fetchedNastavnici.korisnik.prezime}`}
                    options={fetchedNastavnici}
                    isOptionEqualToValue={(option, value) => option.nastavnik_id === value.nastavnik_id}
                    noOptionsText='Nema traženog nastavnika!'
                    renderOption={(props, fetchedNastavnici) => (
                        <Box
                            component='li'
                            {...props}
                            key={fetchedNastavnici.nastavnik_id}
                        >
                            {fetchedNastavnici.korisnik.ime + ' ' + fetchedNastavnici.korisnik.prezime}
                        </Box>
                    )}
                    renderInput={(params) => <TextField {...params} label='Potraži nastavnika...' />}
                    sx={{ flexGrow: 1 }}
                    onChange={(event, newValue) => {
                        nastavnik.current = newValue?.nastavnik_id;
                    }}
                />
                <Autocomplete
                    getOptionLabel={(fetchedPredmeti) => `${fetchedPredmeti.naziv} [razred: ${fetchedPredmeti.razred}]`}
                    options={fetchedPredmeti}
                    isOptionEqualToValue={(option, value) => option.predmet_id === value.predmet_id}
                    noOptionsText='Nema traženog predmeta!'
                    renderOption={(props, fetchedPredmeti) => (
                        <Box
                            component='li'
                            {...props}
                            key={fetchedPredmeti.predmet_id}
                        >
                            {fetchedPredmeti.naziv + ' [razred: ' + fetchedPredmeti.razred + ']'}
                        </Box>
                    )}
                    renderInput={(params) => <TextField {...params} label='Potraži predmet...' />}
                    sx={{ flexGrow: 1 }}
                    onChange={(event, newValue) => {
                        predmet.current = newValue?.predmet_id;
                    }}
                />
            </Stack>
            <Box
                textAlign={'center'}
                mt={2}            >
                <Button
                    variant='contained'
                    size='large'
                    disableElevation
                    sx={{ mr: 2, mb: 1 }}
                    onClick={handleFetchNovoPredavanje}
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
            <Stack
                direction='column'
                sx={{ padding: '0.4rem' }}
            >
                {fetchedData.map((fd) => {
                    return (
                        <Typography
                            variant='body2'
                            textAlign='center'
                            key={fd.predaje_id}
                        >
                            Nastavnik: {fd.nastavnik.korisnik.ime} {fd.nastavnik.korisnik.prezime}, Predmet: {fd.predmet.naziv} za razred {fd.predmet.razred}.
                        </Typography>
                    );
                })}
            </Stack>
        </Box>
    );
};

export default PredavanjeNew;