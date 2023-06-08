import React from 'react';
import { Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
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
                titleTypographyProps={{
                    variant: 'h6',
                }}
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
                <IconButton aria-label="edit" color="primary" onClick={handleEdit}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" color="primary" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Predmet;
