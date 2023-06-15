import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";

const DeleteModal = ({ onCancel, onDelete, title, object }) => {
    return (
        <Dialog
            fullWidth={true}
            open={true}
            onClose={() => onCancel()}
        >
            <DialogTitle textAlign='center'>
                <Alert
                    variant='filled'
                    severity='warning'
                    icon={false}
                    sx={{
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        variant='h5'
                        textAlign={'center'}
                    >Potvrdite brisanje {title}</Typography>

                </Alert>
            </DialogTitle>
            <DialogContent sx={{ ml: 'auto', mr: 'auto' }}>
                {Object.entries(object).map(([key, value]) => {
                    if (typeof value === 'object') {
                        value = JSON.stringify(value); // Prikazuje objekte kao JSON string
                    }
                    return (
                        <DialogContentText key={key}>
                            `{key}: {value}`
                        </DialogContentText>
                    );
                })}
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
                    color='warning'
                    onClick={() => onDelete()}
                >Potvrđujem</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteModal;
