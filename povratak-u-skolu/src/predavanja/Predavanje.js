// import { useContext } from 'react';
import { Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// import { UserContext } from '../App';
// import DeleteModal from '../components/DeleteModal';

const Predavanje = ({ predavanje, onDelete }) => {
    // const { user } = useContext(UserContext);

    return (
        <Card
            variant='outlined'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: 280,
                width: 280,
                borderRadius: 5
            }}
        >
            <CardHeader
                title={predavanje.nastavnik.korisnik.ime + ' ' + predavanje.nastavnik.korisnik.prezime}
                titleTypographyProps={{ variant: 'h6' }}
                subheader={predavanje.nastavnik.korisnickoIme}
                sx={{
                    alignItems: 'start',
                    pb: 0
                }}
            />
            <CardContent>
                <Typography variant='subtitle1'>{predavanje.predmet.naziv}</Typography>
                <Typography variant='body2'>razred: {predavanje.predmet.razred}</Typography>
                <Typography variant='body2'>fond časova: {predavanje.predmet.fondCasova}</Typography>
            </CardContent>
            <CardActions
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>

                {/* Izmena predmeta */}
                <IconButton
                    aria-label='edit'
                    color='primary'
                // onClick={() => setEditModalOpen(true)}
                >
                    <EditIcon />
                </IconButton>
                {/* {editModalOpen && <PredmetEditModal
                    onCancel={() => setEditModalOpen(false)}
                    onSubmit={handleEdit}
                    object={predmet}
                />} */}

                {/* Brisanje predmeta */}
                <IconButton
                    aria-label='delete'
                    color='primary'
                // onClick={() => setDeleteModalOpen(true)}
                >
                    <DeleteIcon />
                </IconButton>
                {/* {deleteModalOpen && <DeleteModal
                    onCancel={() => setDeleteModalOpen(false)}
                    onDelete={handleDelete}
                    object={predmet}
                    title={'predmeta'}
                />} */}
            </CardActions>
        </Card>
    );
};

export default Predavanje;
