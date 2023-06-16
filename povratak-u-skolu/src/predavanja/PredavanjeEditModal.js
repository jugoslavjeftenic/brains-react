import { useContext, useEffect, useState } from "react";
import { Alert, Autocomplete, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField, Typography } from "@mui/material";

import { UserContext } from "../App";

const PredavanjeEditModal = ({ onCancel, onSubmit, object }) => {
    const { user } = useContext(UserContext);

    // Dobavljanje nastavnika i predmeta sa bekenda
    const [fetchedNastavnici, setFetchedNastavnici] = useState([]);
    const [fetchedPredmeti, setFetchedPredmeti] = useState([]);
    const handleFetchPreparation = () => {
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
                        console.log(`Niste ovlašćeni da pristupite traženim resursima. (HTTP kod: ${responseN.status})`);
                    }
                    else {
                        console.log(`Zahtev ka serveru nije bio uspešan (HTTP kod: ${responseN.status})`);
                    }
                }
            }
            catch (error) {
                // hvatanje greski van HTTP odgovora
                console.log(new Error(error));
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

    const [nastavnik, setNastavnik] = useState({
        id: object.nastavnik.nastavnik_id,
        nastavnik: object.nastavnik.korisnik.ime + ' ' + object.nastavnik.korisnik.prezime
    });
    const [predmet, setPredmet] = useState({
        id: object.predmet.predmet_id,
        predmet: object.predmet.naziv
    });

    return (
        <Dialog
            fullWidth={true}
            open={true}
            onClose={() => onCancel()}
        >
            <DialogTitle textAlign='center'>
                <Alert
                    variant='filled'
                    severity='info'
                    icon={false}
                    sx={{
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        variant='h5'
                        textAlign={'center'}
                    >Izmenite predavanje</Typography>

                </Alert>
            </DialogTitle>
            <DialogContent>
                <Stack
                    direction={'row'}
                    spacing={1}
                    paddingTop={1}
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
                        renderInput={(params) => <TextField {...params} label={nastavnik.nastavnik} />}
                        sx={{ flexGrow: 1 }}
                        onChange={(event, newValue) => {
                            setNastavnik((prevState) => ({
                                ...prevState,
                                id: newValue?.nastavnik_id
                            }));
                            // setNastavnik(newValue?.nastavnik_id);
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
                        renderInput={(params) => <TextField {...params} label={predmet.predmet} />}
                        sx={{ flexGrow: 1 }}
                        onChange={(event, newValue) => {
                            setPredmet((prevState) => ({
                                ...prevState,
                                id: newValue?.predmet_id
                            }));
                            // setNastavnik(newValue?.nastavnik_id);
                        }}
                    // onChange={(event, newValue) => {
                    //     setPredmet(newValue?.predmet_id);
                    //     // setPredmet(newValue?.predmet_id);
                    // }}
                    />
                </Stack>
            </DialogContent>
            <DialogActions
                sx={{
                    justifyContent: 'center',
                    gap: 2,
                    padding: 2,
                }}
            >
                <Button onClick={() => onCancel()}>Odustajem</Button>
                <Button
                    variant='contained'
                    color='info'
                    onClick={() => onSubmit(nastavnik.id, predmet.id)}
                >Potvrđujem</Button>
            </DialogActions>
        </Dialog>
    );
};

export default PredavanjeEditModal;
