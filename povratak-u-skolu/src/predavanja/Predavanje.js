import { useContext, useState } from 'react';
import { Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { UserContext } from '../App';
import DeleteModal from '../components/DeleteModal';
import PredavanjeEditModal from './PredavanjeEditModal';

const Predavanje = ({ predavanje, onDelete }) => {
    const { user } = useContext(UserContext);

    // Izmena predavanja
    const [editModalOpen, setEditModalOpen] = useState(false);
    const handleEdit = (nastavnik, predmet) => {
        let cancel = false;
        const goFetch = async () => {
            try {
                let response;
                response = await fetch(`http://localhost:8080/api/v1/predaju/${predavanje.predaje_id}?idNastavnik=${nastavnik}&idPredmet=${predmet}`, {
                    method: "PUT",
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
                        onDelete();
                    }
                }
                else {
                    // hvatanje neuspesnog HTTP odgovora
                    if (response.status === 403) {
                        console.log(`Niste ovlašćeni da pristupite traženim resursima. (HTTP kod: ${response.status})`);
                    }
                    if (response.status === 417) {
                        console.log(`Nastavnik je već registrovan za predmet. (HTTP kod: ${response.status})`);
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

    // Brisanje predavanja
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const handleDelete = () => {
        let cancel = false;
        const goFetch = async () => {
            try {
                let response;
                response = await fetch(`http://localhost:8080/api/v1/predaju/${predavanje.predaje_id}`, {
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
                    onClick={() => setEditModalOpen(true)}
                >
                    <EditIcon />
                </IconButton>
                {editModalOpen && <PredavanjeEditModal
                    onCancel={() => setEditModalOpen(false)}
                    onSubmit={handleEdit}
                    object={predavanje}
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
                    title={'predavanja'}
                    object={predavanje}
                />}
            </CardActions>
        </Card>
    );
};

export default Predavanje;
