import { useContext, useState } from "react";
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
                        console.log(f);
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
                />
                <TextField
                    required
                    variant='standard'
                    id='predmet-razred'
                    type='number'
                    label='Razred'
                />
                <TextField
                    required
                    variant='standard'
                    id='predmet-fond-casova'
                    type='number'
                    label='Fond časova'
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
                // onClick={handleFetch}
                >Upiši</Button>
            </Box>
            <Box
                textAlign={'center'}
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