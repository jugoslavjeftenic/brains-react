import React from 'react';
import { Card, CardActions, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Predmet = ({ predmet }) => {
    const handleEdit = () => {
        return null;
    };

    const handleDelete = () => {
        return null;
    };

    return (
        <Grid item xs={true}>
            <Card
                variant='outlined'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    minWidth: 200,
                }}
            >
                <CardHeader
                    subheader={predmet.naziv}
                    sx={{
                        display: 'flex',
                        border: '1px solid #ccc',
                    }}
                />
                <CardContent>
                    <Typography>ID: {predmet.predmet_id}</Typography>
                    <Typography>razred: {predmet.razred}</Typography>
                    <Typography>fond časova: {predmet.fondCasova}</Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}>
                    <IconButton aria-label="edit" color="primary" onClick={handleEdit}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" color="primary" onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Predmet;
