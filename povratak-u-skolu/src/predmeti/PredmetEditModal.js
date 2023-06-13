import { useState } from "react";
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";

const PredmetEditModal = ({ onCancel, onSubmit, object }) => {
    const [naziv, setNaziv] = useState(object.naziv);
    const [razred, setRazred] = useState(object.razred);
    const [fond, setFond] = useState(object.fondCasova);

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
                    >Izmenite predmet</Typography>

                </Alert>
            </DialogTitle>
            <DialogContent sx={{ ml: 'auto', mr: 'auto' }}>
                <Stack
                    sx={{
                        flexDirection: 'column',
                    }}
                >
                    <TextField
                        id='naziv'
                        variant='outlined'
                        label={'Naziv predmeta'}
                        sx={{ width: 500, mt: 3, mb: 3 }}
                        value={naziv}
                        onChange={(e) => setNaziv(e.target.value)}
                    />
                    <Stack
                        direction={'row'}
                        spacing={1}
                    >
                        <Select
                            labelId='razred-label'
                            id='razred'
                            value={razred}
                            sx={{ flexGrow: 1 }}
                            onChange={(e) => setRazred(e.target.value)}
                        >
                            <MenuItem value={1}>I razred</MenuItem>
                            <MenuItem value={2}>II razred</MenuItem>
                            <MenuItem value={3}>III razred</MenuItem>
                            <MenuItem value={4}>IV razred</MenuItem>
                            <MenuItem value={5}>V razred</MenuItem>
                            <MenuItem value={6}>VI razred</MenuItem>
                            <MenuItem value={7}>VII razred</MenuItem>
                            <MenuItem value={8}>VIII razred</MenuItem>
                        </Select>
                        <Select
                            labelId='fond-label'
                            id='fond'
                            value={fond}
                            sx={{ flexGrow: 1 }}
                            onChange={(e) => setFond(e.target.value)}
                        >
                            <MenuItem value={1}>1 čas nedeljno</MenuItem>
                            <MenuItem value={2}>2 časa nedeljno</MenuItem>
                            <MenuItem value={3}>3 časa nedeljno</MenuItem>
                            <MenuItem value={4}>4 časa nedeljno</MenuItem>
                            <MenuItem value={5}>5 časova nedeljno</MenuItem>
                        </Select>
                    </Stack>
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
                    onClick={() => onSubmit(naziv, razred, fond)}
                >Potvrđujem</Button>
            </DialogActions>
        </Dialog>
    );
};

export default PredmetEditModal;
