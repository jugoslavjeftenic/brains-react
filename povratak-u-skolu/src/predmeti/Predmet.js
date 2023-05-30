import React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material';

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
                    <Button variant='outlined' size='small' onClick={handleEdit}>Izmeni</Button>
                    <Button variant='outlined' size='small' onClick={handleDelete}>Izbriši</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Predmet;
