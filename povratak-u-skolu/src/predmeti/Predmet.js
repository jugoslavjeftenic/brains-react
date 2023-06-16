import { useContext, useState } from 'react';
import { Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { UserContext } from '../App';
import DeleteModal from '../components/DeleteModal';
import PredmetEditModal from './PredmetEditModal';

const Predmet = ({ predmet, onDelete }) => {
    const { user } = useContext(UserContext);

    // Izmena predmeta
    const [editModalOpen, setEditModalOpen] = useState(false);
    const handleEdit = (naziv, razred, fond) => {
        let cancel = false;
        const goFetch = async () => {
            try {
                let response;
                response = await fetch(`http://localhost:8080/api/v1/predmeti/${predmet.predmet_id}`, {
                    method: "PUT",
                    headers: {
                        'Authorization': `Bearer ${user.token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        naziv: naziv,
                        razred: razred,
                        fondCasova: fond,
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
                        onDelete();
                    }
                }
                else {
                    // hvatanje neuspesnog HTTP odgovora
                    if (response.status === 403) {
                        console.log(`Niste ovlašćeni da pristupite traženim resursima. (HTTP kod: ${response.status})`);
                    }
                    else {
                        console.log(`Zahtev ka serveru nije bio uspešan (HTTP kod: ${response.status})`);
                    }
                }
            } catch (error) {
                // hvatanje greski van HTTP odgovora
                console.log(new Error(error));
            }
            finally {
                // Zatvaram modal
                setEditModalOpen(false);
            }
        };
        goFetch();
        return () => {
            cancel = true;
        };
    };

    // Brisanje predmeta
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const handleDelete = () => {
        let cancel = false;
        const goFetch = async () => {
            try {
                let response;
                response = await fetch(`http://localhost:8080/api/v1/predmeti/${predmet.predmet_id}`, {
                    method: "DELETE",
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
                        onDelete();
                    }
                }
                else {
                    // hvatanje neuspesnog HTTP odgovora
                    if (response.status === 403) {
                        console.log(`Niste ovlašćeni da pristupite traženim resursima. (HTTP kod: ${response.status})`);
                    }
                    else {
                        console.log(`Zahtev ka serveru nije bio uspešan (HTTP kod: ${response.status})`);
                    }
                }
            } catch (error) {
                // hvatanje greski van HTTP odgovora
                console.log(new Error(error));
            }
            finally {
                // Zatvaram modal
                setDeleteModalOpen(false);
            }
        };
        goFetch();
        return () => {
            cancel = true;
        };
    };

    return (
        <Card
            variant='outlined'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: 260,
                width: 280,
                borderRadius: 5
            }}
        >
            <CardHeader
                title={predmet.naziv}
                titleTypographyProps={{ variant: 'h6' }}
                sx={{
                    alignItems: 'start',
                    height: 100,
                }}
            />
            <CardContent
            >
                <Typography variant='body2'>ID: {predmet.predmet_id}</Typography>
                <Typography variant='body2'>razred: {predmet.razred}</Typography>
                <Typography variant='body2'>fond časova: {predmet.fondCasova}</Typography>
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
                    onClick={() => setEditModalOpen(true)}
                >
                    <EditIcon />
                </IconButton>
                {editModalOpen && <PredmetEditModal
                    onCancel={() => setEditModalOpen(false)}
                    onSubmit={handleEdit}
                    object={predmet}
                />}

                {/* Brisanje predmeta */}
                <IconButton
                    aria-label='delete'
                    color='primary'
                    onClick={() => setDeleteModalOpen(true)}
                >
                    <DeleteIcon />
                </IconButton>
                {deleteModalOpen && <DeleteModal
                    onCancel={() => setDeleteModalOpen(false)}
                    onDelete={handleDelete}
                    object={predmet}
                    title={'predmeta'}
                />}
            </CardActions>
        </Card>
    );
};

export default Predmet;
